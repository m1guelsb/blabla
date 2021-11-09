import styled from 'styled-components'

export const Container = styled.main`
  padding: 1rem 1rem;

  display: flex;

  text-align: center;
  align-items: center;
  flex-direction: column;

  background: ${props => props.theme.colors['background-3']};

  gap: 2rem;

  @media (min-width: 1024px) {
    height: 100vh;
    justify-content: center;
    text-align: left;
    flex-direction: row;
    position: relative;
  }
`
export const Logo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  div#logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 1024px) {
      align-items: flex-start;
    }
  }

  @media (min-width: 1024px) {
    width: 460px;
  }
`

export const Form = styled.div`
  width: 100%;
  max-width: 460px;
  border-radius: 0.5rem;

  padding: 1.5rem 1.5rem;

  display: flex;
  justify-content: center;

  flex-direction: column;

  gap: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem 2rem;
  }

  background-color: ${props => props.theme.colors['background-2']};

  div#inputs {
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
  }
  div#newAccount {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div#otherSignIn {
    display: flex;
    align-items: center;

    justify-content: space-evenly;
    gap: 0.5rem;
  }
`
