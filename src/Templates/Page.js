import { makeStyles } from '@material-ui/styles'
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(() => ({
  container: {
    padding: '15px 0'
  }

}))


const Page = ({ title, Component }) => {
  const classes = useStyles()
  return (
    <>
      <Typography variant='h3'>
        {title}
      </Typography>
      <Component />
    </>
  )
}

export default Page