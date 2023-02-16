import React from 'react'

const Picture = ({data}) => {
  console.log("Data", data)
  return (
    <div className="picture">
      <p>{data?.photographer}</p>
      <div className="imageContainer">
        <img src={data?.src?.large} alt="" />
      </div>
      <p>
        在此下载图片:{" "}
        <a href={data?.src?.large} target="_blank" rel="noreferrer">
          下载
        </a>
      </p>
    </div>
  )
}

export default Picture