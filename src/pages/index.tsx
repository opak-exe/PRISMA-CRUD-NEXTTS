import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'
export default function Home() {
 const [name , setn] =  useState('')
 const [age , seta] =  useState<number>()
 const [email , sete] =  useState('')
 const [desc , setd] =  useState('')

  return (
    <>
      <Head>
        <title>Prisma CRUD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <form method='POST' onSubmit={(e) => {
        e.preventDefault()
        axios.post('/api/data', {
          name,
          age,
          email,
          about : desc
        })
      }}>
        <label htmlFor="name">username
        <input type="text" id='name' onChange={(e) => setn(e.target.value)} required/>
        </label>
        <label htmlFor="age">age
        <input type="number" min={12} onChange={(e) => seta(e.target.valueAsNumber)}  id='age' required/>
        </label>   <label htmlFor="name">email
        <input type="email" id='email' onChange={(e) => sete(e.target.value)} required />
        </label>   <label htmlFor="des">about you (optional)
        <input type="text" id='des' onChange={(e) => setd(e.target.value)} />
        </label>
        <button type="submit" >sub</button>
      </form>
    </>
  )
}
