// @ts-nocheck
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
import "../styles/calendario.css";
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
import AddEventModal from "components/addEventModal";

const Calendario = () => {
  var calendarRef = React.createRef();
  const [view, setView] = React.useState(1);
  const [addModal, setAddModal] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const events = [
    {
      id: 1,
      title: "event 1",
      start: "2022-06-23T10:00:00",
      end: "2022-06-23T14:10:00",
    },
    {
      id: 5,
      title: "event 1",
      start: "2022-06-23T20:00:00",
      end: "2022-06-23T23:10:00",
    },
    {
      id: 2,
      title: "event 2",
      start: "2022-06-25T16:00:00",
      end: "2022-06-25T20:00:00",
    },
    {
      id: 3,
      title: "event 3",
      start: "2021-06-17",
      end: "2021-06-20",
    },
  ];

  const toggleAddModal = (event) =>{
    if(event.date && !addModal) {
      setDate(event.date);
    }
    else if(addModal) {
      setDate(new Date());
    }

    setAddModal(!addModal)
  };


  // dayGridMonth,timeGridWeek,timeGridDay
  React.useEffect(() => {
    let calendarApi = calendarRef.current.getApi();
    if (window.innerWidth <= 768) {
    }
    if (view === 0) calendarApi.changeView("dayGridMonth");
    else if (view === 1) calendarApi.changeView("timeGridWeek");
    else if (view === 2) calendarApi.changeView("timeGridDay");
  }, [calendarRef, view]);

  const changeView = (event) => {
    let value = parseInt(event.target.value);
    console.log(value);
    setView(value);
  };

  const stampa = (event) => {
    console.log(event);
  };

  return (
    <motion.div
      initial={{ height: 0, opacity: "1" }}
      animate={{ height: "100%", opacity: "1" }}
      exit={{ y: window.innerHeight, opacity: "0", transition: { duration: "0.2" } }}
      style={{
        marginLeft: "50px",
        marginTop: "20px",
      }}
    >
      <div
        id="calendar"
        style={{
          textAlign: "left",
          marginTop: "",
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          locale="it"
          ref={calendarRef}
          stickyFooterScrollbar="false"
          height={"93vh"}
          events={events}
          firstDay={1}
          dayHeaderFormat={{ weekday: "short" }}
          allDaySlot={0}
          navLinks={1}
          dateClick={toggleAddModal}
          handleWindowResize={1}
          headerToolbar={{
            // start: "prev,dayGridMonth,timeGridWeek,timeGridDay",
            // center: "new",
            // end: "next"
            start: "prev,next,today",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          customButtons={{
            new: {
              text: "new",
              click: () => {
                let calendarApi = calendarRef.current.getApi();
                calendarApi.next();
              },
            },
          }}
          nowIndicator
        />
      </div>
      <Fab color="primary" aria-label="add" size="large" sx={{ position: "absolute", bottom: 16, right: 16 }} onClick={toggleAddModal}>
        <AddIcon />
      </Fab>
      <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={addModal}
      onClose={setAddModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <AddEventModal date={date} open={addModal} close={toggleAddModal}/>
    </Modal>
    </motion.div>
  );
};

export default Calendario;
