import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../css/signup.css"

export default function FormLogin() {
	const [showform, setShowForm] = useState("signup")
	const navigate = useNavigate()

	const handleShowSignup = () => {
		setShowForm("signup")
	}
	const handleShowLogin = () => {
		setShowForm("login")
	}
	const handleClickBack = (event) => {
		event.preventDefault()
		navigate("/") // Main page path로 이동
	}

	const form1 = (
		<div className='form1'>
			<form>
				<div className='job'>
					<div className='owner'>
						<input id='owner' name='job' type='radio' value='owner' />
						<label htmlFor='owner'>사장님</label>
					</div>

					<div className='customer'>
						<input id='customer' name='job' type='radio' value='customer' checked />
						<label htmlFor='customer'>고객</label>
					</div>
				</div>

				<tr>
					<th>이름</th>
					<input name='name' placeholder='name' autoComplete='off' required />
				</tr>

				<tr>
					<th>아이디</th>
					<input name='username' placeholder='id' autoComplete='off' required />
				</tr>

				<tr>
					<th>비밀번호</th>
					<input name='password' placeholder='password' autoComplete='off' required />
				</tr>

				<tr>
					<th>이메일</th>
					<input name='email' placeholder='@gmail.com' autoComplete='none' required />
				</tr>
				<tr>
					<th>전화번호</th>
					<input name='phnum' placeholder='010 -' autoComplete='off' required />
				</tr>
				<tr id='btns'>
					<button className='loginbtn'>회원가입</button>
					<button className='backbtn' onClick={handleClickBack}>
						되돌아가기
					</button>
				</tr>
			</form>
		</div>
	)

	const form2 = (
		<div className='form2'>
			<form>
				<div className='job'>
					<div className='owner'>
						<input id='owner' name='job' type='radio' value='owner' />
						<label htmlFor='owner'>사장님</label>
					</div>

					<div className='customer'>
						<input id='customer' name='job' type='radio' value='customer' checked />
						<label htmlFor='customer'>고객</label>
					</div>
				</div>

				<tr>
					<th>아이디</th>
					<input name='username' placeholder='id' autoComplete='off' required />
				</tr>

				<tr>
					<th>비밀번호</th>
					<input name='password' placeholder='password' autoComplete='off' required />
				</tr>

				<tr id='btns'>
					<button className='loginbtn'>로그인</button>
					<button className='backbtn' onClick={handleClickBack}>
						되돌아가기
					</button>
				</tr>
			</form>
		</div>
	)

	return (
		<>
			<div className='navlogin'>
				<div className={`show_signup ${showform === "signup" ? "active" : ""}`}>
					<button className='btn' id='sgp' onClick={handleShowSignup}>
						회원가입
					</button>
				</div>
				<div className={`show_login ${showform === "login" ? "active" : ""}`}>
					<button className='btn' id='lgn' onClick={handleShowLogin}>
						로그인
					</button>
				</div>
			</div>
			{showform === "signup" ? form1 : form2}
		</>
	)
}
