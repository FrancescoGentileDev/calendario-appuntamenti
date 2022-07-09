import React from "react";
import { motion } from "framer-motion";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Col, Row } from "react-bootstrap";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Autocomplete, Fab, IconButton, SpeedDial, SpeedDialAction, SpeedDialIcon, TextField } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import EventIcon from "@mui/icons-material/Event";
import BlockIcon from "@mui/icons-material/Block";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import CloseIcon from "@mui/icons-material/Close";
import { Italian } from "flatpickr/dist/l10n/it";

/**
 * @param {{ date: any; open: boolean; close: { (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void; }; }} props
 */
export default function AddEventModal(props) {
  const [value, setValue] = React.useState(props.date);
  const [dateStart, setDateStart] = React.useState(props.date);
  const [dateEnd, setDateEnd] = React.useState(props.date);
  const [timeStart, setTimeStart] = React.useState(props.date);
  const [timeEnd, setTimeEnd] = React.useState(props.date);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    bgcolor: "background.paper",
    borderRadius: "10px",
    p: 4,
  };

  return (
    <Fade in={props.open}>
      <Box className="modalApp" sx={style}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <h4 style={{ flex: 1 }}>Aggiungi Appuntamento</h4>

          <IconButton aria-label="close" onClick={props.close} style={{}}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </div>

        <hr />

        
        <Row className="text-center mt-4">
          <Col className="col-10 m-auto">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[
                { label: "The Shawshank Redemption", year: 1994 },
                { label: "The Godfather", year: 1972 },
                { label: "The Godfather: Part II", year: 1974 },
              ]}
              renderInput={(params) => <TextField {...params} label="Servizio" />}
            />
          </Col>
          <Col className="col-2">
            <IconButton aria-label="Aggiungi Servizio" size="large">
              <AddCircleIcon fontSize="inherit" />
            </IconButton>
          </Col>
        </Row>


        <Row className="text-center mt-4">
          <Col className="col-10 m-auto">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={[
                { label: "The Shawshank Redemption", year: 1994 },
                { label: "The Godfather", year: 1972 },
                { label: "The Godfather: Part II", year: 1974 },
              ]}
              renderInput={(params) => <TextField {...params} label="Cliente" />}
            />
          </Col>
          <Col className="col-2">
            <IconButton aria-label="Aggiungi Cliente" size="large">
              <AddCircleIcon fontSize="inherit" />
            </IconButton>
          </Col>
        </Row>
        <Row>


          <Col className="col-6 mt-3 d-flex flex-column">
            <div className="d-flex flex-column">
              <label htmlFor="date-start">Data inizio</label>
              <Flatpickr
                options={{ locale: Italian, dateFormat: "d/m/Y" }}
                id="date-start"
                value={dateStart}
                onChange={([date]) => {
                  setDateStart(date);
                }}
              />
            </div>
            <div className="d-flex flex-column mt-3">
              <label htmlFor="date-end">Data fine</label>
              <Flatpickr
                options={{ locale: Italian, dateFormat: "d/m/Y" }}
                id="date-end"
                value={dateEnd}
                onChange={([date]) => {
                  setDateEnd(date);
                }}
              />
            </div>
          </Col>
          <Col className="col-6 mt-3 d-flex flex-column">
            <div className="d-flex flex-column">
              <label htmlFor="date-start">Ora inizio</label>
              <Flatpickr
                options={{ locale: Italian, dateFormat: "H:i" }}
                data-enable-time
                data-no-calendar
                data-time_24hr
                id="date-start"
                value={timeStart}
                onChange={([date]) => {
                  setTimeStart(date);
                }}
              />
            </div>
            <div className="d-flex flex-column mt-3">
              <label htmlFor="date-end">Ora fine</label>
              <Flatpickr
                options={{ locale: Italian, dateFormat: "H:i" }}
                data-enable-time
                data-no-calendar
                data-time_24hr
                id="date-end"
                value={timeEnd}
                onChange={([date]) => {
                  setTimeEnd(date);
                }}
              />
            </div>
          </Col>
        </Row>
        <hr />
        <div className="bottoncini" style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "30px" }}>
          <Button variant="contained" style={{ marginRight: "10px", backgroundColor: "red" }} onClick={props.close}>
            ANNULLA
          </Button>

          <Button variant="contained" style={{ backgroundColor: "green" }}>
            INVIA
          </Button>
        </div>
      </Box>
    </Fade>
  );
}
