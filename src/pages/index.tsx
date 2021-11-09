import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Divider } from '../components/Divider'

import { Container, Logo, Form } from '../styles/pages/index'
import LogoIMG from '../assets/images/logo.svg'
import IconIMG from '../assets/images/icon.svg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>blablá | Login</title>
      </Head>

      <Container>
        <Logo>
          <div id="logo">
            <Image
              alt="Blablá Icon"
              src={IconIMG}
              height="60px"
              width="60px"
              placeholder="empty"
            />
            <Image
              alt="Blablá Logo"
              src={LogoIMG}
              height="60px"
              width="200px"
              placeholder="empty"
            />
          </div>

          <h1>Talk to who you want!</h1>
        </Logo>
        <Form>
          <div id="inputs">
            <Input
              title="email input"
              name="email"
              placeholder="Email"
              type="email"
            />
            <Input
              title="password input"
              name="senha"
              placeholder="Password"
              type="password"
            />

            <span>
              <Link href="/password-reset">
                <a>I forgot my password</a>
              </Link>
            </span>
          </div>

          <Button>Entrar</Button>

          <div id="newAccount">
            <p>
              Dont have a account?
              <Link href="/chat">
                <a> Sign-up</a>
              </Link>
            </p>
          </div>

          <Divider />

          <div id="otherSignIn">
            <span>Or: </span>
            <Button backgroundColor="#003154" width="230px">
              Sign In with Google
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  )
}
