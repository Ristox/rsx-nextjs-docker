import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'

const ShowDetails =  (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary?.replace(/<[/]?p>/g, '') || 'No summary available'}</p>
      {props.show.image?.medium ? <img src={props.show.image.medium}/> : <p>No image available</p>}
    </Layout>
)

ShowDetails.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()
  return { show }
}

export default ShowDetails;
