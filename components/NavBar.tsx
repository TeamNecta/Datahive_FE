import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-primary rounded">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li tabIndex={0}>
        <Link href={"/df"}>
          Clean Data
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2 bg-primary">
          <li><Link href={"/datatype"}>Change DataType</Link></li>
          <li><Link href={"/normalize"}>Normalize</Link></li>
        </ul>
      </li>
        <li><Link href={"/visualize"}>Visualize Data</Link></li>
      <li><Link href="/correlation">Find Correlation</Link></li>
      </ul>
    </div>
    <Link href="/" className="btn btn-ghost normal-case text-xl">DataHive</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li tabIndex={0}>
        <Link href={"/df"}>
          Clean Data
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2 bg-base-100">
          <li><Link href={"/datatype"}>Change DataType</Link></li>
          <li><Link href={"/normalize"}>Normalize</Link></li>
        </ul>
      </li>
      <li><Link href={"/visualize"}>Visualize Data</Link></li>
      <li><Link href="/correlation">Find Correlation</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link href={"/"} className="btn">Upload File</Link>
  </div>
</div>
  )
}

export default NavBar