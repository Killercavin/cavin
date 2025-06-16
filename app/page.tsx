import { FaNodeJs, FaRust } from "react-icons/fa"
import HomePage from "./HomePage"
import * as fs from "fs";

async function getData() {
  try {
    const jsonData = fs.readFileSync("data.json", "utf-8");
    // console.log("Data from file : " + jsonData);
    return JSON.parse(jsonData);
  } catch (err) {
    console.log("Error reading file : " + err);
  }
}

export default async function page() {

  const data = await getData()

  return (
    <>
      {data ?
        <HomePage data={data} />
        :
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-grey-900">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-violet-600"></div>
            <p className="mt-4 text-lg font-medium">Loading...</p>
          </div>
        </div>
      }
    </>
  )
}