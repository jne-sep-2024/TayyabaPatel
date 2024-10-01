import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import styles from './youtubeform.module.css';
import { DevTool } from '@hookform/devtools';
// let count=0;

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  rollNo: {
    no: string;
  }[];
  age: number;
  dob: Date;

};

export default function YouTubeForm() {

  const { register,
    control,
    handleSubmit,
    formState: { errors,
      touchedFields,
      dirtyFields,
      isDirty, isValid,
      isSubmitting,
      isSubmitted, isSubmitSuccessful,
      submitCount },
    watch,
    getValues,
    setValue,
    reset,
    trigger
  } = useForm<FormValues>(
    {
      defaultValues: {
        username: "Tayyaba",
        email: "tayyaba@gmail.com",
        channel: "",
        social: {
          twitter: "",
          facebook: ""
        },
        phoneNumbers: ["", ""],
        rollNo: [{ no: "" }],
        age: 0,
        dob: new Date()
      },
      mode: "onBlur"
    }
  );
  const { fields, append, remove } = useFieldArray({
    name: 'rollNo',
    control
  })
  const userInfo = watch(["username", "age", "email", "channel"]);

  const onSubmit = (data: FormValues) => {
    console.log('Form Submitted', data);
  };
  const getData = () => {
    console.log("get Data ", getValues());
  }
  const setData = () => {
    setValue("username", "", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    });
  }
  console.log({
    touchedFields,
    dirtyFields,
    isDirty, isValid,
    isSubmitting, isSubmitted,
    isSubmitSuccessful, submitCount
  })
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset])

  return (
    <div className={styles.container}>
      <h1>React Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">username:</label>
        <input type="text" id="username" {...register('username',
          {
            required:
              { value: true, message: "username required !" }
          }

        )} />
        <p>{errors.username?.message}</p>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register('email', {
          pattern:
          {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "invalid email formate !"
          },
          validate: {
            notAdmin: (fieldValue) => {
              return (
                fieldValue !== "tayyba.patel@thinkitive.com" || "enter a different email"
              );

            },
            botBlaclList: (fielValue) => {
              return (
                !fielValue.endsWith("thinkitive.com") ||
                "this domain is not support"
              )
            },
            isEmailAvailable: async (fieldValue) => {
              const response = await fetch("");
              const data = await response.json();
              return data.length == 0 || "email already exist";


            }

          }
        })} />
        <p className='error'>{errors.email?.message}</p>

        <label htmlFor="channel">Channel:</label>
        <input type="text" id="channel" {...register('channel',
          {
            required: {
              value: true,
              message: "channel is required !"
            }
          }
        )} />
        <p className='error'>{errors.channel?.message}</p>

        <label htmlFor="twitter">Twitter :</label>
        <input type="text" id="twitter" {...register('social.twitter', {
          required: {
            value: true,
            message: "twitter is required !"
          }
        })} />
        <p>{errors.social?.twitter?.message}</p>

        <label htmlFor="facebook">Facebook :</label>
        <input type="text" id="facebook" {...register('social.facebook', {
          required: {
            value: true,
            message: "faceboook is required"

          }

        })} />
        <p>{errors.social?.facebook?.message}</p>

        <label htmlFor="primary-phone">Primary PhoneNumber :</label>
        <input type="text" id="primary-phone" {...register('phoneNumbers.0', {
          required: {
            value: true,
            message: "phone number is required !"
          }
        })} />
        <p>{errors.phoneNumbers?.[0]?.message}</p>
        <label htmlFor="secondary-phone">Secondary PhoneNumber :</label>
        <input type="text" id="secondary-phone" {...register('phoneNumbers.1')} />

        <label >list of roll no :</label>
        <div>
          {
            fields.map((field, index) => {
              return (<div key={field.id}>
                <input type="text" {...register(`rollNo.${index}.no`)} />
                {
                  index > 0 && (
                    <button type='button' onClick={() => { remove(index) }}>Remove</button>
                  )
                }
              </div>)

            })
          }
          <button type='button' onClick={() => { append({ no: "" }) }}>Add Roll No</button>
        </div>
        <label htmlFor="age">Age :</label>
        <input type="number" id="age" {...register('age',
          {
            valueAsNumber: true,
            required: {
              value: true,
              message: "age is required !"
            }
          }
        )} />
        <p className='error'>{errors.age?.message}</p>

        <label htmlFor="dob">Date Of Birth :</label>
        <input type="Date" id="dob" {...register('dob',
          {
            valueAsDate: true,
            required: {
              value: true,
              message: "Date of Birth is required !"
            }
          }
        )} />
        <p className='error'>{errors.dob?.message}</p>
        <button type="button"
          disabled={!isDirty || !isValid}>Submit</button>
        <button type="button" >ReSet</button>
        <button type="button" onClick={() => { getData() }}>Get Values</button>
        <button type="button" onClick={() => { setData() }}>Set Value</button>
        <button type="button" onClick={() => { trigger("age") }}>Validate</button>
      </form>
      <h2>
        <li>{userInfo[0]}</li>
        <li>{userInfo[1]}</li>
        <li>{userInfo[2]}</li>
        <li>{userInfo[3]}</li></h2>
      <DevTool control={control} />
    </div>
  );
}

