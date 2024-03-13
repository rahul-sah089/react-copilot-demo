import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './../logo.svg'
import { Col, Row } from 'antd'
import { FilePdfOutlined, LogoutOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

const Header = () => {
  return (
    <div>
      <header className="bg-danger text-white p-3 header-class">
        <div className="container-fluid">
          <div className="row ">
            <Row gutter={16}>
              <Col span={8}>
                {/* <img
                  src={logo}
                  alt="Logo"
                  className="img-fluid"
                  style={{ maxWidth: '10%', height: '20px' }}
                /> */}

                <span className="logo-text" >PRESBYTERIAN</span>
              </Col>
              <Col span={16} >
                <Row gutter={16} style={{ marginLeft: "25%", fontSize: "16px" }}>
                  <Col span={7}>
                    <Input style={{ width: '100%', borderRadius: "2px", border: '1px solid #ccc' }} placeholder="Imitate Provider By Tax ID" prefix={<SearchOutlined />} />
                  </Col>
                  <Col span={2}>
                    <MenuOutlined style={{ fontSize: '20px' }} />
                  </Col>
                  <Col span={4}>
                    <i className="fa fa-star" style={{ marginRight: "5px" }} aria-hidden="true">
                      <FilePdfOutlined /></i>
                    <span className='navbar-username'>User Manual</span>
                  </Col>
                  <Col span={6}>
                    <span className="navbar-username">Ankita Shinde / 10203903</span>
                  </Col>
                  <Col span={5} >
                    <LogoutOutlined />
                    &nbsp;
                    <span className="col-2 navbar-username" >Logout</span>

                  </Col>
                </Row>
              </Col>
            </Row>


          </div>
        </div>
      </header>

      {/* Rest of your component content goes here */}
    </div>
  )
}

export default Header
