import type { GetServerSideProps, NextPage } from 'next'
import { useSelector } from 'react-redux'
import { wrapper } from '../app/store'
import { selectState, setProfileData } from '../app/store/slices/profile'
import styles from '../styles/Home.module.css'


const Home: NextPage = (props) => {
  const statetest = useSelector(selectState)
  console.log(props)
  return (
    <div className={styles.container}>
      <div>HELLO IM INDEX PAGE</div>
      <div>statetest:{JSON.stringify(statetest)}</div>
    </div>
  )
}
//to ssr all pages
export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) =>{
console.log(ctx)
store.dispatch(setProfileData("OMG ACTION GONE"))
  return {props: {omgprop:"omgstring"}}
} )


export default Home
