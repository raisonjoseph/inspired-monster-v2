/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getShots } from "../../api/works";

const Works = () => {
  const router = useRouter();
  const [dribbleWorks, setDribbleWorks] = useState([]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await getShots();
        if (response) setDribbleWorks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWorks();
  }, []);

  const handleOnWorkClick = (id) => router.push(`/works/${id}/`);

  return (
    <React.Fragment>
      <Head>
        <title>Inspired Monster | About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="works">
        <div className="container">
          {dribbleWorks?.map((work, index) => (
            <div
              className="item"
              key={work.id}
              onClick={() => handleOnWorkClick(work.id)}
              style={
                (index + 1) % 10 === 0
                  ? {
                      gridRowStart: Math.floor((index + 1) / 10) * 4 - 1,
                    }
                  : {}
              }
            >
              <Image
                src={work.images?.two_x}
                alt={work.title}
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Works;
