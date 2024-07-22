import React from "react"
import { useNavigate } from "react-router-dom"
import "../css/navbar.css"
import logoSrc from "../photos/FDlogo.png" // 경로가 맞는지 확인하세요

export default function Navbar() {
	const navigate = useNavigate()

	const handleClickLogin = (event) => {
		event.preventDefault()
		navigate("/login")
	}

	const Logo = <img src={logoSrc} alt='logo' /> // 함수 외부에 정의

	return (
		<div className='navbar'>
			<div className='logofont'>{Logo} 배지</div> {/*배고픈 당신을 위해 지금 바로 준비해드려요 */}
			<button className='loginbtn' onClick={handleClickLogin}>
				로그인
			</button>
		</div>
	)
}
