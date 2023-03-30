import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  appointments: [
    {
      id: "1",
      title: "title1",
      patient_name: "Kavi M",
      test_name: "Heart Test",
      // start_time: "09:00 AM",
      // end_time: "10:00 AM",
      start_date: new Date("03/03/2023"),
      end_date: new Date("03/03/2023")
    },
    {
      id: "2",
      title: "title2",
      patient_name: "Arun S",
      test_name: "Full CheckUp",
      // start_time: "09:00 AM",
      // end_time: "10:00 AM",
      start_date: new Date("03/03/2023"),
      end_date: new Date("03/03/2023")
    },
    {
      id: "3",
      title: "title2",
      patient_name: "Senthil R",
      test_name: "Full CheckUp",
      // start_time: "12:00 PM",
      // end_time: "01:00 PM",
      start_date: new Date("03/03/2023"),
      end_date: new Date("03/03/2023")
    },
    {
      id: "4",
      title: "title3",
      patient_name: "Veni G",
      test_name: "Blood Test",
      // start_time: "12:00 PM",
      // end_time: "01:00 PM",
      start_date: new Date("03/03/2023"),
      end_date: new Date("03/03/2023")
    },
    {
      id: "5",
      title: "title3",
      patient_name: "Kumar S",
      test_name: "Blood Test",
      // start_time: "05:00 PM",
      // end_time: "06:00 PM",
      start_date: new Date("03/03/2023"),
      end_date: new Date("03/03/2023")
    },
    {
      id: "6",
      title: "title4",
      patient_name: "Pavi S",
      test_name: "Heart Test",
      // start_time: "02:00 PM",
      // end_time: "03:00 PM",
      start_date: new Date("03/03/2023"),
      end_date: new Date("03/03/2023")
    },
    {
      id: "7",
      title: "title4",
      patient_name: "Pavi R",
      test_name: "Heart Test",
      // start_time: "06:00 APM",
      // end_time: "07:00 AM",
      start_date: new Date("03/04/2023"),
      end_date: new Date("03/04/2023")
    },
    {
      id: "8",
      title: "title4",
      patient_name: "Raja R",
      test_name: "Heart Test",
      // start_time: "02:00 PM",
      // end_time: "03:00 PM",
      start_date: new Date("03/04/2023"),
      end_date: new Date("03/04/2023")
    },
    {
      id: "9",
      title: "title4",
      patient_name: "Mani S",
      test_name: "Heart Test",
      // start_time: "02:00 PM",
      // end_time: "03:00 PM",
      start_date: new Date("03/04/2023"),
      end_date: new Date("03/04/2023")
    },
    {
      id: "10",
      title: "title4",
      patient_name: "Palani S",
      test_name: "Heart Test",
      // start_time: "02:00 PM",
      // end_time: "03:00 PM",
      start_date: new Date("03/04/2023"),
      end_date: new Date("03/04/2023")
    },
    {
      id: "11",
      title: "title5",
      patient_name: "Siva R",
      test_name: "Blood Test",
      // start_time: "06:00 AM",
      // end_time: "07:00 AM",
      start_date: new Date("03/04/2023"),
      end_date: new Date("03/04/2023")
    },
    {
      id: "12",
      title: "title5",
      patient_name: "Vel R",
      test_name: "Blood Test",
      // start_time: "07:00 AM",
      // end_time: "08:00 AM",
      start_date: new Date("03/04/2023"),
      end_date: new Date("03/04/2023")
    },
  ],
  appointmentLength: []
}

export const appointmentReducer = createSlice({
  name: 'appointmentReducer',
  initialState,
  reducers: {
    createAppointment: (state, { payload }) => {
      state.appointments.push(payload)
    },
    fetchAppointment: (state, { payload }) => {
      state.appointments = payload
    },
    createAppointmentLength: (state, { payload }) => {
      state.appointmentLength.push(payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { createAppointment, fetchAppointment, createAppointmentLength } = appointmentReducer.actions

export default appointmentReducer.reducer