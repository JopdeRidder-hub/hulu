import { NextPage } from "next"

interface Props {
    title: string;
    Icon: any;
  }

const HeaderItem: NextPage<Props> = (props) => {
    const {title, Icon } = props
  return (
    // We use the group parameter to set styling for all elements in that div
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
        <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  )
}

export default HeaderItem