import React, { useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import './complaint.css'
import {useForm} from 'react-hook-form'
import axios from 'axios'

const Complaint = () => {
  let {register,handleSubmit,formState:{errors}} = useForm()

  const submit = async (data)=>{
    await axios.post('http://localhost:8080/complaints',data)
    .then(console.log('success'))
    .catch((err)=>console.log(err))
    console.log(data);
  }
  return (
    <div className='d-flex justify-content-center align-items-center form-outer'>
      <form className='form'onSubmit={handleSubmit(submit)} >
        <h1>Register Complaint</h1>
        <div className='p-3'>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("complainer_name")}
          />
        </div>
        <div className='p-3'>

          <TextField
            id="phonenumber"
            label="Phonenumber"
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("complainer_phone")}
          />
        </div>
        <div className='p-3'>

          <FormControl className='d-block'>
            <InputLabel id="simple-select-label"  >Domain</InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              label="Domain"
              style={{ width: "100%" }}
              {...register("complaint_domain")}
            >
              <MenuItem value="DEFAULT" disabled >choose option</MenuItem>
              <MenuItem value="Hospital">Hospital</MenuItem>
              <MenuItem value="Schools">Schools</MenuItem>
              <MenuItem value="Ration shop">Ration Shop</MenuItem>
              <MenuItem value="Municipality">Municipality</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='p-3'>
          <TextField
            id="name"
            label="Against"
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("against_person_name")}
          />
        </div>
        <div className='p-3'>
          <TextField
            id="complaint"
            label="Complaint"
            multiline
            rows={4}
            variant="outlined"
            sx={{ width: "100%" }}
            {...register("complaint_detail")}
          />
        </div>
        <div className='d-flex justify-content-center'>
          <input type='file' className='form-control w-50'  ></input>
        </div>
        <div className='d-flex justify-content-center p-3'>
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>

  );
};

export default Complaint;