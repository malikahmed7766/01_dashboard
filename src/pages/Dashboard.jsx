import React from 'react'
import Zoom_chart from '../components/Zoom_chart'
import Pie_chart from '../components/Pie_chart'
import Line_chart from '../components/Line_chart'
import Card from '../components/Card'
import card_1 from '../assets/img/card-1.jpg'
import card_2 from '../assets/img/card-2.jpg'
import card_3 from '../assets/img/card-3.jpg'
import Member from '../assets/img/member.jpg'
import Booble_img from '../assets/img/booble.jpg'
import Bitcoin_img from '../assets/img/bitcoin.jpg'
import Ethereum_img from '../assets/img/ethereum.jpg'
import Shiba_img from '../assets/img/shiba.jpg'
import Solona_img from '../assets/img/solona.jpg'
import Tether_img from '../assets/img/tether.jpg'
import Coin_list from '../components/Coin_list'
import Progress from '../components/Progress'
import Table from '../components/Table'
import Crypto from '../components/Crypto'
import Pie_chart_2 from '../components/Pie_chart_2'
import Feedback_widget from '../components/Feedback_widget'

const Dashboard = () => {

  return (
    <>
      <div className="row w-full">

        <div className="col-lg-9">

          <div className="row g-0 gx-2 mb-3">

            <div className="col-md-8">

              <div className="performance bg-white p-2 rounded-md">

                <div className="title mb-3">
                  <h2 className="md:text-xl font-bold">Portfolios Performance</h2>
                </div>

                <div className="row justify-between g-0 mb-3">

                  <div className="col-lg-4 mb-3 mb-lg-0">
                    <div className="wlt-item flex items-center gap-2">
                      <div className="wlt-icon flex justify-center items-center bg-blue-200 text-blue-700 w-10 h-10 rounded-md">
                        <i className="fa fa-solid fa-money-bills"></i>
                      </div>
                      <div className="wlt-info">
                        <span className="font-semibold text-gray-500">Total assets</span>
                        <p className="text-2xl font-bold text-black">$ 87.743</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 mb-3 mb-lg-0">
                    <div className="wlt-item flex items-center gap-2">
                      <div className="wlt-icon flex justify-center items-center bg-blue-200 text-blue-700 w-10 h-10 rounded-md">
                        <i className="fa fa-solid fa-wallet"></i>
                      </div>
                      <div className="wlt-info">
                        <span className="font-semibold text-gray-500">Total deposits</span>
                        <p className="text-2xl font-bold text-black">$ 87.743</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 mb-3 mb-lg-0">
                    <div className="wlt-item flex items-center gap-2">
                      <div className="wlt-icon flex justify-center items-center bg-blue-200 text-blue-700 w-10 h-10 rounded-md">
                        <i className="fa fa-solid fa-bank"></i>
                      </div>
                      <div className="wlt-info">
                        <span className="font-semibold text-gray-500">Withdrawals</span>
                        <p className="text-2xl font-bold text-black">$ 87.743</p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="row justify-between items-center w-full">

                  <div className="col-lg-4 mb-3 mb-lg-0">
                    <div className="flex justify-center justify-content-lg-start items-center gap-2">

                      <div className="flex items-center gap-2 px-2 h-9 rounded-full bg-gray-950 text-white">
                        <div className="icon flex justify-center items-center bg-stone-500 h-5 w-5 rounded-full">
                          <i className="fa fa-brands fa-ethereum"></i>
                        </div>
                        <div className="dropdown">
                          <button className="dropdown-toggle p-0 m-0" type="button" data-bs-toggle="dropdown">Dropdown</button>
                          <ul className="dropdown-menu m-0">
                            <li><button className="dropdown-item" type="button">Action</button></li>
                          </ul>
                        </div>
                      </div>

                      <button className="text-2xl text-gray-500"><i className="fa fa-sliders"></i></button>

                    </div>

                  </div>

                  <div className="col-lg-8 mb-3 mb-lg-0">
                    <div className="flex justify-center justify-content-lg-end gap-1">
                      <button className="flex items-center justify-center w-8 h-8 rounded-md bg-slate-300">1H</button>
                      <button className="flex items-center justify-center w-8 h-8 rounded-md bg-slate-300">1D</button>
                      <button className="flex items-center justify-center w-8 h-8 rounded-md bg-slate-300">1M</button>
                      <button className="flex items-center justify-center w-8 h-8 rounded-md bg-slate-300">1Y</button>
                      <button className="flex items-center justify-center w-8 h-8 rounded-md bg-slate-300"><i className="fa fa-calendar-alt"></i></button>
                    </div>
                  </div>

                  <div className="line-chart my-4">
                    <Zoom_chart />
                  </div>

                </div>

              </div>

            </div>

            <div className="col-4 hidden md:block">
              <div className="profit-loss bg-white p-2 rounded-md" style={{ minHeight: "33.35rem" }}>
                <h3 className="text-xs md:text-xl font-bold text-center mb-2 md:mb-5">Profit / Loss tracker</h3>
                <div className="chrt">
                  <Pie_chart />
                </div>
                <div className="chrt-box flex justify-center md:justify-between px-3 mt-5">

                  <div className="first flex items-center gap-1">
                    <div className="box w-6 h-6 bg-blue-500 rounded-sm cursor-pointer"></div>
                    <span className="font-bold text-black text-xl">Profit</span>
                  </div>

                  <div className="second flex items-center gap-1">
                    <div className="box w-6 h-6 bg-red-500 rounded-sm cursor-pointer"></div>
                    <span className="font-bold text-black text-xl">Loss</span>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <div className="snapshot">

            <div className="row">

              <div className="col-md-8">
                <div className="snapshot bg-white p-2 rounded-md mb-3 min-h-44">

                  <div className="title my-3 px-2">
                    <h4 className="text-xl font-bold">Market snapshot</h4>
                  </div>

                  <div className="w-full">
                    <Line_chart />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="market bg-white p-2 rounded-md mb-3" style={{ minHeight: "25.35rem" }}>
                  <div className="trending-coin">

                    <div className="title my-3 px-2">
                      <h4 className="md:text-xl font-bold">Trending Coin</h4>
                    </div>

                    <div className="coin-list">
                      <div className="my-3">
                        <Coin_list icon_img={Bitcoin_img} coin_title="Bitcoin" bg_color="orange" />
                      </div>
                      <div className="my-3">
                        <Coin_list icon_img={Ethereum_img} coin_title="Ethereum" bg_color="red" />
                      </div>
                      <div className="my-3">
                        <Coin_list icon_img={Shiba_img} coin_title="Shiba" bg_color="orange" />
                      </div>
                    </div>

                    <div className="coin-list">
                      <div className="my-3">
                        <Coin_list icon_img={Bitcoin_img} coin_title="Bitcoin" bg_color="orange" />
                      </div>
                      <div className="my-3">
                        <Coin_list icon_img={Ethereum_img} coin_title="Ethereum" bg_color="red" />
                      </div>
                      <div className="my-3">
                        <Coin_list icon_img={Shiba_img} coin_title="Shiba" bg_color="orange" />
                      </div>
                    </div>


                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="card-row row mb-3">

            <div className="col-lg-4">
              <Card title="Lorem ipsum dol 1" desc="Lorem ipsum dolor sit ipsum dolor sit ipsum dolor ipsum" crd_img={card_1} />
            </div>

            <div className="col-lg-4">
              <Card title="Lorem ipsum dol 2" desc="Lorem ipsum dolor sit ipsum dolor sit ipsum dolor ipsum" crd_img={card_2} />
            </div>

            <div className="col-lg-4">
              <Card title="Lorem ipsum dol 3" desc="Lorem ipsum dolor sit ipsum dolor sit ipsum dolor ipsum" crd_img={card_3} />
            </div>
          </div>

          <div className="row items-center mb-3">

            <div className="col-lg-4">
              <div className="analytics-sec bg-white p-2 rounded-md" style={{ minHeight: "20rem" }}>

                <div className="analytics flex items-center gap-4 mb-3">
                  <div className="icon text-center text-lg-start">
                    <img src={Booble_img} alt="booble" className="" />
                  </div>
                  <div className="info text-center text-lg-start">
                    <h4 className="text-xl font-bold">Ads Section</h4>
                  </div>
                </div>

                <div className="desc">
                  <p className="lead">
                    Facebook Marketing is a simple, to market their products and services through the biggest social
                  </p>
                </div>

              </div>
            </div>

            <div className="col-lg-4">

              <div className="analytics-sec bg-white rounded-md-p-2" style={{ minHeight: "20rem" }}>
                <div className="title py-2 px-3">
                  <h4 className="text-xl font-bold">Advanced Analytics</h4>
                </div>
                <div className="flex items-center justify-center h-20">
                  <div className="flex justify-center mb-2 gap-1">
                    <button className="btn btn-dark btn-sm">1H</button>
                    <button className="btn btn-dark btn-sm">1D</button>
                    <button className="btn btn-dark btn-sm">1M</button>
                    <button className="btn btn-dark btn-sm">1Y</button>
                    <button className="btn btn-dark btn-sm"><i className="fa fa-calendar-alt"></i></button>
                  </div>
                </div>
                <Zoom_chart height="150" show="false" />
              </div>

            </div>

            <div className="col-lg-4">
              <div className="analytics-sec bg-white rounded-md p-2" style={{ minHeight: "20rem" }}>

                <div className="title py-2 px-3 mb-3">
                  <h4 className="text-xl font-bold">Quick trade</h4>
                </div>

                <div className="row gx-1">
                  <div className="col-md-6">
                    <div className="img">
                      <img src={card_1} className="block h-60 mb-2 mb-lg-0 md:h-20 rounded-md" alt="card" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img">
                      <img src={card_2} className="block h-60 mb-2 mb-lg-0 md:h-20 rounded-md" alt="card" />
                    </div>
                  </div>
                </div>

                <div className="my-2">
                  <Zoom_chart height="150" show="false" />
                </div>

              </div>
            </div>

          </div>

          <div className="row mb-2">

            <div className="col-lg-4">
              <div className="quick-overview bg-white rounded-md p-2" style={{ minHeight: "21.12rem" }}>
                <div className="title text-center text-md-start mb-3">
                  <h4 className="text-xl font-semibold">Quick Overview</h4>
                </div>
                <div className="pie_chart_2 w-1/2">
                  <Pie_chart_2 />
                </div>
              </div>
            </div>

            <div className="col-lg-8 mb-2">
              <Feedback_widget btn_text="Buy BTC" btn_bg="success" />
            </div>

            <div className="col-12 mb-2">
              <Feedback_widget btn_text="Sell BTC" btn_bg="danger" />
            </div>

          </div>

        </div>

        <div className="col-lg-3">

          <div className="low-pricing bg-white p-2 rounded-md mb-3" style={{ minHeight: "33.35rem" }}>
            <div className="title text-center">
              <h3 className="text-xl font-bold mb-3">Low Price Update</h3>
            </div>
            <div className="my-3">

              <div className="mb-3">
                <Progress icon_type="brands" icon_img={Bitcoin_img} coin_title="Bitcoin" icon_bg="orange-500" progress_bg="blue-500" />
              </div>

              <div className="mb-3">
                <Progress icon_type="brands" icon_img={Ethereum_img} coin_title="Ethereum" icon_bg="orange-500" progress_bg="blue-500" />
              </div>

              <div className="mb-3">
                <Progress icon_type="brands" icon_img={Shiba_img} coin_title="Shiba" icon_bg="orange-600" progress_bg="blue-500" />
              </div>

              <div className="mb-3">
                <Progress icon_type="brands" icon_img={Solona_img} coin_title="Solona" icon_bg="orange-600" progress_bg="blue-500" />
              </div>

              <div className="mb-3">
                <Progress icon_type="solid" icon_img={Tether_img} coin_title="Tether" icon_bg="orange-600" progress_bg="blue-500" />
              </div>

              <div className="d-grid my-2">
                <button className="btn btn-dark btn-lg">Read More</button>
              </div>

            </div>
          </div>

          <div className="flex items-center justify-center mb-3">
            <div className="join-community bg-white p-2 rounded-md w-full">
              <div className="card border-transparent">
                <div className="card-header bg-transparent border-b-transparent">
                  <img src={Member} className="card-img block mx-auto object-cover" alt="card" />
                </div>
                <div className="card-body text-center">
                  <h4 className="card-title mb-0 leading-normal font-bold">Join Community</h4>
                </div>
                <div className="card-footer bg-transparent border-t-transparent">
                  <div className="d-grid my-2">
                    <button type="button" className="btn btn-dark btn-sm">Join Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="watchlist bg-white p-2 rounded-md mb-3">
            <div className="flex justify-between items-center">
              <h4 className="font-light">Watchlist</h4>
              <button className="btn btn-outline-primary btn-sm rounded-full px-2 py-1 text-xs bg-blue-100 hover:text-blue-800 hover:bg-blue-300 active:bg-blue-300">Refresh</button>
            </div>
            <div className="data-table my-3">
              <Table />
            </div>
          </div>

          <div className="crypto flex flex-col justify-center gap-y-5 bg-white p-2 rounded-md mb-3" style={{ minHeight: "23.35rem" }}>
            <div className="mb-3">
              <Crypto placeholder="Bit.coin.crypto" />
            </div>
            <div className="mb-3">
              <Crypto placeholder="Bit.coin.crypto" />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Dashboard
