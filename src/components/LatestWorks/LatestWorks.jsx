import React from "react";
import './latestWorks.css'
import blog from '../../assets/blog.png'
import coffee from '../../assets/coffee.png'
import finans from '../../assets/finans.png'
import nfts from '../../assets/nfts.png'
import valentes from '../../assets/valentes.png'
import starbucks from '../../assets/starbucks.jpeg'

export default function LatestWorks() {
    return (
        <section className="latestWorks">
            <h2 className="title-latest">Últimos trabalhos</h2>

            <div className="latest">
                <img className="mb" height={300} width={400} src={blog} alt="" />
                <img className="mb" height={300} width={400} src={coffee} alt="" />
                <img className="mb" height={300} width={400} src={finans} alt="" />
                <img className="mb" height={300} width={400} src={nfts} alt="" />
                <img className="mb" height={300} width={400} src={valentes} alt="" />
                <img className="mb" height={300} width={400} src={starbucks} alt="" />
            </div>
        </section>
    )
}