import { FaNodeJs, FaRust } from "react-icons/fa"
import HomePage from "./HomePage"
import * as fs from "fs";
import Loading from "./loading";

async function getData() {
  try {
    const jsonData = fs.readFileSync("data.json", "utf-8");
    // console.log("Data from file : " + jsonData);
    return JSON.parse(jsonData);
  } catch (err) {
    console.error("Error reading file : " + err);
  }
}

export default async function page() {

  const data = await getData()

  return (
    <>
      {data ?
        <HomePage data={data} />
        :
        <Loading />
      }
    </>
  )
}