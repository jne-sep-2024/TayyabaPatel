import React from 'react'
import styles from "./youtubeform.module.css"
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

export default function YouTubeForm() {
    const {register,control}=useForm();


  return (
    <div>
        <form className={styles.container}>
        <label htmlFor="username">UserName :</label>
        <input type="text" id="username"
        {...register('username')} />

        <label htmlFor="username">E-Mail :</label>
        <input type="email" id="email" name="email" 
        {...register('email')}/>

        <label htmlFor="cahnnel">Cahnnel :</label>
        <input type="text" id="channel" {...register("channel")} />
        <br />

        <button>Submit</button>
        <DevTool control={control}/>
        </form>

      
    </div>

  )
}
