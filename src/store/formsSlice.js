import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  salesEnquiry: {
    machineName: '',
    machineImage: null,
    userName: '',
    email: '',
    city: '',
    contactNumber: '',
    loading: false,
    submitted: false,
  },
  engineerVisit: {
    machineName: '',
    hospitalName: '',
    userName: '',
    city: '',
    contactNumber: '',
    address: '',
    loading: false,
    submitted: false,
  },
  contactUs: {
    userName: '',
    contactNumber: '',
    message: '',
    loading: false,
    submitted: false,
  },
};

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    updateSalesEnquiry: (state, action) => {
      state.salesEnquiry = { ...state.salesEnquiry, ...action.payload };
    },
    updateEngineerVisit: (state, action) => {
      state.engineerVisit = { ...state.engineerVisit, ...action.payload };
    },
    updateContactUs: (state, action) => {
      state.contactUs = { ...state.contactUs, ...action.payload };
    },
    resetSalesEnquiry: (state) => {
      state.salesEnquiry = initialState.salesEnquiry;
    },
    resetEngineerVisit: (state) => {
      state.engineerVisit = initialState.engineerVisit;
    },
    resetContactUs: (state) => {
      state.contactUs = initialState.contactUs;
    },
    setLoading: (state, action) => {
      const { formType, loading } = action.payload;
      state[formType].loading = loading;
    },
    setSubmitted: (state, action) => {
      const { formType, submitted } = action.payload;
      state[formType].submitted = submitted;
    },
  },
});

export const {
  updateSalesEnquiry,
  updateEngineerVisit,
  updateContactUs,
  resetSalesEnquiry,
  resetEngineerVisit,
  resetContactUs,
  setLoading,
  setSubmitted,
} = formsSlice.actions;

export default formsSlice.reducer;