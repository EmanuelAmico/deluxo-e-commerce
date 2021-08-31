import React, { useEffect, useRef, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import "../assets/styles/components/Home.scss";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showCategories } from "../redux/categories";

const Home = () => {
  const scrollRef = useRef(null);
  const homeBodyRef = useRef(null);
  const svgRef = useRef(null);
  const bannerRef = useRef(null);
  const inputRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    if (categories.length) {
      const headerHeight = 80;
      window.scroll(0, -headerHeight);
      setTimeout(() => {
        if (window.location.pathname === "/") {
          if (scrollRef) {
            scrollRef.current.scrollIntoView();
          }
          disableBodyScroll(homeBodyRef, {
            reserveScrollBarGap: true,
          });
        }
      }, 3800);
      // Restart svg animation
      restartAnimation();
    }
  });

  useEffect(() => {
    if (!categories.length) {
      dispatch(showCategories());
    }
    return () => {
      enableBodyScroll(homeBodyRef);
    };
  }, []);

  const restartAnimation = () => {
    if (bannerRef.current.classList.contains("opacity-0")) {
      bannerRef.current.classList.remove("opacity-0");
      bannerRef.current.classList.add("opacity-100");
    }
    bannerRef.current.classList.toggle("d-none");
    // La línea de abajo hace que el browser haga un reflow del DOM, reiniciando la animacion de ese elemento (es como si volviera a calcular todo del elemento para mostrarlo en pantalla)
    void bannerRef.current.offsetWidth;
    bannerRef.current.classList.toggle("d-none");
  };

  const handleMouseEnter = (e) => {
    const div = e.target.parentNode.children[1];
    div.classList.add("btnImgBox-focused");
  };

  const handleMouseLeave = (e) => {
    const div = e.target.parentNode.children[1];
    div.classList.remove("btnImgBox-focused");
  };

  const selectCategory = (e) => {
    const category = e.target.parentNode.children[1].textContent;
    history.push(`/products?category=${category}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchProduct = (e) => {
    if (e.key === "Enter" || e.target.attributes.name.value === "magnifier") {
      history.push(`/products?search=${inputRef.current.value}`);
    }
  };

  return (
    <div
      className="homeBody"
      ref={homeBodyRef} /* transition-style="in:custom:swoopy" */
    >
      <section className="banner opacity-0" ref={bannerRef}>
        <div>
          <svg
            id="logo-deluxo"
            xmlns="http://www.w3.org/2000/svg"
            width="387.1499938964844"
            height="180.1199951171875"
            viewBox="0 0 387.15 180.12"
            ref={svgRef}
          >
            <ellipse
              id="elipse"
              cx="194"
              cy="91.19"
              rx="165.59"
              ry="82.32"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={categories.length ? "svg-elem-1" : null}
            ></ellipse>
            <path
              id="lv"
              d="M309.44,52.05c26.32,19.51,41.78,43.31,41.78,69s-15.39,49.39-41.6,68.87"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={categories.length ? "svg-elem-2" : null}
            ></path>
            <path
              id="rv"
              d="M138.18,192.92c-28.73-20-45.76-44.9-45.76-71.86s17.07-51.9,45.86-71.93"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={categories.length ? "svg-elem-3" : null}
            ></path>
            <path
              id="lv-2"
              data-name="lv"
              d="M260.84,41.35C289.36,64,306.24,92,306.24,122.41c0,28.91-15.28,55.7-41.33,77.73"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={categories.length ? "svg-elem-4" : null}
            ></path>
            <path
              id="rv-2"
              data-name="rv"
              d="M184.19,201.52c-27.06-22.28-43-49.6-43-79.11,0-30.93,17.5-59.44,47-82.28"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={categories.length ? "svg-elem-5" : null}
            ></path>
            <path
              id="lv-3"
              data-name="lv"
              d="M223.55,38.64c21.13,23.21,33.54,51.51,33.54,82,0,30.81-12.63,59.33-34.1,82.66"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={categories.length ? "svg-elem-6" : null}
            ></path>
            <path
              id="rv-3"
              data-name="rv"
              d="M214.12,203.38c-21.54-23.35-34.21-51.92-34.21-82.78,0-30.44,12.34-58.67,33.36-81.85"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={categories.length ? "svg-elem-7" : null}
            ></path>
            <path
              id="th"
              d="M291.19,46.92c-20.7,3.93-45.49,6.22-72.14,6.22s-51.49-2.29-72.2-6.23"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={categories.length ? "svg-elem-8" : null}
            ></path>
            <path
              id="thm"
              d="M353.67,73.11C320,88.87,270.71,98.8,215.81,98.8c-52.82,0-100.43-9.2-134-23.92"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={categories.length ? "svg-elem-9" : null}
            ></path>
            <path
              id="bh"
              d="M134.25,191.78c22.87-5.58,52.47-8.95,84.8-8.95s61.84,3.36,84.7,8.93"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={categories.length ? "svg-elem-10" : null}
            ></path>
            <path
              id="bhm"
              d="M90.28,172.81c32.85-12.68,77-20.45,125.53-20.45,50.45,0,96.16,8.39,129.37,22"
              transform="translate(-25 -29.83)"
              fill="none"
              stroke="#9deaa7"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={categories.length ? "svg-elem-11" : null}
            ></path>
            <g id="deluxo-txt">
              <path
                id="D"
                d="M59.07,158.16H27.61L41,86.09H69.79a48.29,48.29,0,0,1,12.46,1.35A12.38,12.38,0,0,1,89.46,92Q92,95.71,92,102c0,.22,0,1.51-.07,3.87s-.8,7.24-2.25,14.6Q87.8,131,86.36,136.86a38.19,38.19,0,0,1-3.21,9,21.47,21.47,0,0,1-4.64,5.75,22.26,22.26,0,0,1-8.07,4.9A35.06,35.06,0,0,1,59.07,158.16Zm-.42-17.26q2.41,0,3.48-3c.47-1.36.95-3.11,1.46-5.25s1.19-5.41,2-9.83q2.08-11.92,2.09-14.95a3.67,3.67,0,0,0-.65-2.57,2.54,2.54,0,0,0-1.85-.63H62.13l-6.82,36.2Z"
                transform="translate(-25 -29.83)"
                fill="#9595e9"
                className={categories.length ? "svg-elem-12" : null}
              ></path>
              <path
                id="E"
                d="M160.37,158.16H85.2L98.56,86.09h73.83l-3.71,20H119.53l-1.16,6.31H167.7l-3.53,19H114.85l-1.3,7.1H164Z"
                transform="translate(-25 -29.83)"
                fill="#9595e9"
                className={categories.length ? "svg-elem-13" : null}
              ></path>
              <path
                id="L"
                d="M221.85,158.16l-58.42-.37L176.8,85.72l35.17.37-9.7,52.11h23.3Z"
                transform="translate(-25 -29.83)"
                fill="#9595e9"
                className={categories.length ? "svg-elem-14" : null}
              ></path>
              <path
                id="U"
                d="M251.92,159a38.75,38.75,0,0,1-13.92-2.3,16.33,16.33,0,0,1-8.77-7.26,15.91,15.91,0,0,1-1.85-7.94,28.7,28.7,0,0,1,.46-5l9.37-50.4H262l-1,5.29q-3.06,16.71-5.25,28.26l-2.69,14.62c-.31,1.73-.49,2.68-.55,2.83a6.26,6.26,0,0,0-.1,1.07,2.38,2.38,0,0,0,.51,1.58,2.49,2.49,0,0,0,1.95.6,3.3,3.3,0,0,0,3.62-3.16c.13-.58.66-3.43,1.6-8.53l3.25-17.5q1.83-9.84,3.23-17.45L268,86.09h25.1l-9.42,50.72q-2.22,11.06-10.74,16.59T251.92,159Z"
                transform="translate(-25 -29.83)"
                fill="#9595e9"
                className={categories.length ? "svg-elem-15" : null}
              ></path>
              <path
                id="X"
                d="M344.13,158.16H317.3l-2.73-10.3-6.45,10.3H281.3l25.1-37.4L295.54,86.09h26.78l2.73,11.84,7.24-11.84H357.4l-24.18,38.1Z"
                transform="translate(-25 -29.83)"
                fill="#9595e9"
                className={categories.length ? "svg-elem-16" : null}
              ></path>
              <path
                id="O"
                d="M373.55,159.23q-8.69,0-14.11-2-10.53-3.84-10.53-14.57v-1q0-5.1,2.78-19.77,1.21-6.87,2.14-11a48.46,48.46,0,0,1,2.08-7.15,26.88,26.88,0,0,1,10-12.85q8-5.52,21.35-5.53,16.47,0,22.08,8.08a16.87,16.87,0,0,1,2.83,9.79,49.77,49.77,0,0,1-.55,6.89c-.37,2.62-1,6.3-1.9,11.07q-1.49,7.84-2.63,12.34a62.67,62.67,0,0,1-2.29,7.43Q398.65,159.23,373.55,159.23Zm3.66-18.8a3.45,3.45,0,0,0,3.62-2.6q2.42-7.23,5.2-24.4a50.75,50.75,0,0,0,.7-6,4.77,4.77,0,0,0-.52-2.32c-.34-.62-1.09-.93-2.27-.93a3.33,3.33,0,0,0-2.57.93,7.53,7.53,0,0,0-1.47,2.79q-1.15,3.94-3.11,14.34a103.8,103.8,0,0,0-2.18,15.73v.18a2.7,2.7,0,0,0,.51,1.6A2.44,2.44,0,0,0,377.21,140.43Z"
                transform="translate(-25 -29.83)"
                fill="#9595e9"
                className={categories.length ? "svg-elem-17" : null}
              ></path>
            </g>
            <path
              id="star-top-small"
              d="M397,54.68s0,13.24-10.43,13.24C397,67.92,397,81.09,397,81.09s0-13.17,10.42-13.17C397,67.92,397,54.68,397,54.68Z"
              transform="translate(-25 -29.83)"
              fill="#9deaa7"
              className={categories.length ? "svg-elem-18" : null}
            ></path>
            <path
              id="star-bottom-small"
              d="M62.55,188s0,11-8.65,11c8.65,0,8.65,10.93,8.65,10.93S62.55,199,71.2,199C62.55,199,62.55,188,62.55,188Z"
              transform="translate(-25 -29.83)"
              fill="#9deaa7"
              className={categories.length ? "svg-elem-19" : null}
            ></path>
            <path
              id="star-bottom-big"
              d="M41.4,163.44s0,20.83-16.4,20.83c16.4,0,16.4,20.72,16.4,20.72s0-20.72,16.4-20.72C41.4,184.27,41.4,163.44,41.4,163.44Z"
              transform="translate(-25 -29.83)"
              fill="#9deaa7"
              className={categories.length ? "svg-elem-20" : null}
            ></path>
            <path
              id="star-top-big"
              d="M377.33,29.83s0,19.71-15.51,19.71c15.51,0,15.51,19.61,15.51,19.61s0-19.61,15.52-19.61C377.33,49.54,377.33,29.83,377.33,29.83Z"
              transform="translate(-25 -29.83)"
              fill="#9deaa7"
              className={categories.length ? "svg-elem-21" : null}
            ></path>
          </svg>
        </div>
      </section>

      <div id="content">
        <section className="sidebar">
          <form className="formContainer" onSubmit={handleSubmit}>
            <div className="searchBox">
              <div className="input-wrapper">
                <input
                  className="inputStyle"
                  type="text"
                  placeholder="Search..."
                  name="search"
                  onKeyPress={searchProduct}
                  ref={inputRef}
                />
                <div className="searchBtn" onClick={searchProduct}>
                  <svg
                    className="svg-icon"
                    viewBox="0 0 20 20"
                    name="magnifier"
                  >
                    <path
                      name="magnifier"
                      d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </form>

          <div className="sidebarLinks">
            <div className="sidebarCat">
              <div className="sidebarTitle">Shop by Category</div>
              {categories.map((category, i) => (
                <div className="sidebarItems" key={i}>
                  <Link to={`/products?category=${category}`}>{category}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mainContent">
          <div className="col-1">
            <div
              className="imgBox-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={selectCategory}
            >
              <img src="https://static.zumiez.com/skin/frontend/delorum/default/images/crunchyroll-godzilla-collection-us-june2021-444x500.jpg" />
              <div className="btnImgBox">Hoodies</div>
            </div>
            <div className="separator"></div>
            <div
              className="imgBox-1"
              onMouseOver={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={selectCategory}
            >
              <img src="https://static.zumiez.com/skin/frontend/delorum/default/images/multibrand-mens-board-shorts-may2021-444x500.jpg" />
              <div className="btnImgBox">Shorts</div>
            </div>
          </div>

          <div className="col-2">
            <div
              className="imgBox-1"
              onMouseOver={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={selectCategory}
            >
              <img src="https://static.zumiez.com/skin/frontend/delorum/default/images/multibrand-mens-denim-pants-june2021-444x360.jpg" />
              <div className="btnImgBox">Jeans</div>
            </div>
            <div className="separator"></div>

            <div
              className="imgBox-2"
              ref={scrollRef}
              onMouseOver={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={selectCategory}
            >
              <img src="https://static.zumiez.com/skin/frontend/delorum/default/images/vans-womens-pink-windbreaker-jacket-spring-catalog-mar2021-444x500.jpg" />
              <div className="btnImgBox">Jackets</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
