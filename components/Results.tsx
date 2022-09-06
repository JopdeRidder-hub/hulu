import { HuluResponseObject } from "../utils/types"
import Thumnail from "./Thumbnail"

const Results = (props:any) => {
  const { results } = props

  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {results.map((result: HuluResponseObject) => (
           <Thumnail _key={result.id} result={result}/> 
        ))}
    </div>
  )
}


export default Results