import "./Quantum.scss";
import { PureComponent } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import _ from "lodash";

import withHeaderFooterWrapper from "../../components/HeaderFooterWrapper";

interface Transmitted {
  encoder: string;
  decoder: string;
  bitEncoded: string;
  bitDecoded: string;
}

type QuantumProps = Record<string, never>;

type QuantumStates = {
  bits: string[];
  dataTransmitted: Transmitted[];
  currentBit: string;
  currentBitEncoded: string;
  currentBitDecoded: string;
  currentEncoder: string;
  currentDecoder: string;
};

const bases = ["{|0>, |1>}", "{|+>, |->}"];

class Quantum extends PureComponent<QuantumProps, QuantumStates> {
  constructor(props: QuantumProps) {
    super(props);
    this.state = {
      bits: [],
      dataTransmitted: [],
      currentBit: "",
      currentBitEncoded: "",
      currentBitDecoded: "",
      currentEncoder: "",
      currentDecoder: "",
    };
  }

  componentDidMount(): void {
    this.generateBits();
  }

  generateBits = () => {
    const bits = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 2).toString()
    );
    const bit = bits[bits.length - 1];
    this.setState({ currentBit: bit, bits: _.dropRight(bits) });
  };

  chooseEncoder = () => {
    const basis = bases[Math.floor(Math.random() * 2)];
    this.setState({ currentEncoder: basis });
  };

  chooseDecoder = () => {
    const basis = bases[Math.floor(Math.random() * 2)];
    this.setState({ currentDecoder: basis });
  };

  encode = () => {
    const { currentBit } = this.state;
    this.setState({ currentBitEncoded: currentBit });
  };

  decode = () => {
    const { currentEncoder, currentDecoder, currentBitEncoded } = this.state;
    if (currentEncoder === currentDecoder) {
      this.setState({ currentBitDecoded: currentBitEncoded });
    } else {
      this.setState({
        currentBitDecoded: Math.floor(Math.random() * 2).toString(),
      });
    }
  };

  record = () => {
    const { bits, dataTransmitted } = this.state;
    const newTransmission = {
      encoder: this.state.currentEncoder,
      decoder: this.state.currentDecoder,
      bitEncoded: this.state.currentBitEncoded,
      bitDecoded: this.state.currentBitDecoded,
    };
    const bit = bits[bits.length - 1];
    this.setState({
      currentBit: bit,
      bits: _.dropRight(bits),
      dataTransmitted: [...dataTransmitted, newTransmission],
      currentBitEncoded: "",
      currentBitDecoded: "",
      currentEncoder: "",
      currentDecoder: "",
    });
  };

  render() {
    const {
      bits,
      currentBit,
      currentBitEncoded,
      currentBitDecoded,
      currentEncoder,
      currentDecoder,
      dataTransmitted,
    } = this.state;
    return (
      <div className="Quantum">
        <div className="Quantum__title">BB84 quantum key distribution</div>
        <div className="Quantum__intro">
          <p>
            The module below simulates the{" "}
            <a
              href="https://en.wikipedia.org/wiki/BB84"
              className="Work__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              BB84 quantum key distribution protocol
            </a>
            . The current version does not include an eavesdropper, but it will
            be added in the future.
          </p>
          <p>
            The protocol is as follows: Alice and Bob share a quantum channel.
            Alice chooses a basis (a set of two orthonormal vectors, either the
            standard basis or the Hadamard basis) and encodes a bit (0 or 1) in
            a qubit in that basis. She then sends the qubit to Bob through the
            quantum channel. Bob chooses a basis (again, either the standard
            basis or the Hadamard basis) and measures the qubit in that basis
            upon receiving the qubit. Alice and Bob will then compare their
            basis choices. If the two bases are the same, Bob can decode the bit
            with certainty. If the two bases are different, Bob discard the
            qubit because 50% of the time the bit will be incorrectly decoded.
            The process repeats.
          </p>
          <p>
            Whatever bits that are not discarded in the end will be the shared
            private key.
          </p>
        </div>
        <div className="Quantum__simulation">
          <div className="Quantum__subtitle">Remaining bits: {bits}</div>
          <div className="Quantum__controllers">
            <div className="Quantum__controllers--players">
              <div className="Quantum__controller">
                <div className="Quantum__controller--title">Alice (sender)</div>
                <Button
                  className="Quantum__controller--button"
                  disabled={!!currentEncoder}
                  onClick={this.chooseEncoder}
                  variant="contained"
                  size="small"
                >
                  Choose basis (encoder)
                </Button>
                <Button
                  className="Quantum__controller--button"
                  disabled={!currentEncoder || !!currentBitEncoded}
                  onClick={this.encode}
                  variant="contained"
                  size="small"
                >
                  Encode and transmit
                </Button>
                <div className="Quantum__controller--results">
                  <div>Encoding basis: {currentEncoder}</div>
                  <div>Bit encoded: {currentBitEncoded}</div>
                </div>
              </div>
              <div className="Quantum__controller">
                <div className="Quantum__controller--title">
                  Current bit: {currentBit}
                </div>
              </div>
              <div className="Quantum__controller">
                <div className="Quantum__controller--title">Bob (receiver)</div>
                <Button
                  className="Quantum__controller--button"
                  disabled={
                    !currentEncoder || !currentBitEncoded || !!currentDecoder
                  }
                  onClick={this.chooseDecoder}
                  variant="contained"
                  size="small"
                >
                  Choose basis (decoder)
                </Button>
                <Button
                  className="Quantum__controller--button"
                  disabled={
                    !currentEncoder ||
                    !currentBitEncoded ||
                    !currentDecoder ||
                    !!currentBitDecoded
                  }
                  onClick={this.decode}
                  variant="contained"
                  size="small"
                >
                  Receive and decode
                </Button>
                <div className="Quantum__controller--results">
                  <div>Decoding basis: {currentDecoder}</div>
                  <div>
                    Probability:{" "}
                    {currentEncoder && currentDecoder
                      ? currentEncoder === currentDecoder
                        ? "100%"
                        : "50%"
                      : null}
                  </div>
                  <div>Bit decoded: {currentBitDecoded}</div>
                </div>
              </div>
            </div>
            <div className="Quantum__controller">
              <Button
                className="Quantum__controller--button"
                disabled={
                  !currentEncoder ||
                  !currentBitEncoded ||
                  !currentDecoder ||
                  !currentBitDecoded
                }
                onClick={this.record}
                variant="contained"
                size="small"
              >
                Record
              </Button>
            </div>
          </div>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Encoding basis</TableCell>
                  <TableCell align="center">Bit encoded</TableCell>
                  <TableCell align="center">Decoding basis</TableCell>
                  <TableCell align="center">Bit decoded</TableCell>
                  <TableCell align="center">Keep</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataTransmitted.map((transmission) => (
                  <TableRow
                    key={transmission.bitEncoded} // Find better key
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{transmission.encoder}</TableCell>
                    <TableCell align="center">
                      {transmission.bitEncoded}
                    </TableCell>
                    <TableCell align="center">{transmission.decoder}</TableCell>
                    <TableCell align="center">
                      {transmission.bitDecoded}
                    </TableCell>
                    <TableCell align="center">
                      {transmission.encoder === transmission.decoder
                        ? "Yes"
                        : "No"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
}

export default withHeaderFooterWrapper(Quantum);
