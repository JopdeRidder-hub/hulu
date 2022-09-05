import { NextPage } from "next"

interface Props {
    results: any;
  }

const Results: NextPage<Props> = (props) => {
    const { results } = props
  return (
    <div>Results</div>
  )
}


export default Results