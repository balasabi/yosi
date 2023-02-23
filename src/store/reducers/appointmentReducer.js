import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  appointments: [
    // {
    //   id: "PID0001",
    //   title: "title1",
    //   patient_name: "Kavi M",
    //   test_name: "Heart Test",
    //   start_time: "09:00 AM",
    //   end_time: "09:00 AM",
    //   'start': new Date("02/16/2023"),
    //   'end': new Date("02/16/2023")
    // },
    // {
    //   id: "PID0002",
    //   title: "title2",
    //   patient_name: "Arun S",
    //   test_name: "Full CheckUp",
    //   start_time: "09:00 AM",
    //   end_time: "09:00 AM",
    //   'start': new Date("02/16/2023"),
    //   'end': new Date("02/16/2023")
    // },
    // {
    //   id: "PID0003",
    //   title: "title2",
    //   patient_name: "Senthil R",
    //   test_name: "Full CheckUp",
    //   start_time: "09:00 AM",
    //   end_time: "09:00 AM",
    //   'start': new Date("02/16/2023"),
    //   'end': new Date("02/16/2023")
    // },
    // {
    //   id: "PID0004",
    //   title: "title3",
    //   patient_name: "Veni G",
    //   test_name: "Blood Test",
    //   start_time: "12:00 PM",
    //   end_time: "12:00 PM",
    //   'start': new Date("02/17/2023"),
    //   'end': new Date("02/17/2023")
    // },
    // {
    //   id: "PID0005",
    //   title: "title3",
    //   patient_name: "Kumar S",
    //   test_name: "Blood Test",
    //   start_time: "12:00 PM",
    //   end_time: "12:00 PM",
    //   'start': new Date("02/17/2023"),
    //   'end': new Date("02/17/2023")
    // },
    // {
    //   id: "PID0006",
    //   title: "title4",
    //   patient_name: "Pavi S",
    //   test_name: "Heart Test",
    //   start_time: "02:00 PM",
    //   end_time: "03:00 PM",
    //   'start': new Date("02/16/2023"),
    //   'end': new Date("02/16/2023")
    // },
    // {
    //   id: "PID0007",
    //   title: "title4",
    //   patient_name: "Pavi R",
    //   test_name: "Heart Test",
    //   start_time: "02:00 PM",
    //   end_time: "03:00 PM",
    //   'start': new Date("02/16/2023"),
    //   'end': new Date("02/16/2023")
    // },
    // {
    //   id: "PID0008",
    //   title: "title4",
    //   patient_name: "Raja R",
    //   test_name: "Heart Test",
    //   start_time: "02:00 PM",
    //   end_time: "03:00 PM",
    //   'start': new Date("02/16/2023"),
    //   'end': new Date("02/16/2023")
    // },
    // {
    //   id: "PID0009",
    //   title: "title4",
    //   patient_name: "Mani S",
    //   test_name: "Heart Test",
    //   start_time: "02:00 PM",
    //   end_time: "03:00 PM",
    //   'start': new Date("02/16/2023"),
    //   'end': new Date("02/16/2023")
    // },
    // {
    //   id: "PID0010",
    //   title: "title4",
    //   patient_name: "Palani S",
    //   test_name: "Heart Test",
    //   start_time: "02:00 PM",
    //   end_time: "03:00 PM",
    //   'start': new Date("02/16/2023"),
    //   'end': new Date("02/16/2023")
    // },
    // {
    //   id: "PID0011",
    //   title: "title5",
    //   patient_name: "Siva R",
    //   test_name: "Blood Test",
    //   start_time: "2:00 PM",
    //   end_time: "2:00 PM",
    //   'start': new Date("02/16/2023"),
    //   'end': new Date("02/16/2023")
    // },

  ]
}

export const appointmentReducer = createSlice({
  name: 'appointmentReducer',
  initialState,
  reducers: {
    createAppointment: (state, { payload }) => {
      state.appointments.push(payload)
    },
    // fetchAppointment: (state, { payload }) => {
    //     state.appointments = payload
    //   }
  },
})

// Action creators are generated for each case reducer function
export const { createAppointment, fetchAppointment } = appointmentReducer.actions

export default appointmentReducer.reducer