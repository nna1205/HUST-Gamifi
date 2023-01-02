import Link from 'next/link'
import {useState} from 'react'
import {subjectsList} from '../data/material'

const SearchBox = () => {
    return (
        <section name="search" className="flex flex-col justify-center items-center bg-red-500 w-screen p-8 my-20">
            <div name="header" className="">
                <span className="text-5xl font-bold mr-4">See math and science in a new way</span>
                <p className="mt-4 opacity-80">
                    All of our courses are crafted by award-winning teachers, researchers, and professionals from HUST. Check them out!
                </p>
            </div>
            <div name="search box" className="flex justify-between items-center bg-white border-2 border-red-500 rounded-xl w-full max-w-xl px-8 py-4 my-10">
                <input className="w-full text-black bg-transparent focus:outline-none focus:border-b focus:border-b-red-500" placeholder="Nhập tên môn bạn muốn tìm"/>
                <div className="text-2xl flex justify-center items-center">
                    <button className="px-6"><iconify-icon icon="ph:triangle-fill" style={{color: '#c02135'}} flip="vertical"/></button>
                    <button><iconify-icon icon="ion:search" style={{color: '#c02135'}}/></button>
                </div>
            </div>
            <span className="text-xl font-bold my-2">Popular searched subjects</span>
            <div className="grid grid-cols-2 lg:grid-cols-4">
                {subjectsList.slice(0,8).map(subject => {
                    return (
                        <div key={subject.id} className="border border-gray-300 rounded-md m-2 flex justify-center items-center text-center">
                            <Link href={subject.url} className="px-4 py-2">
                                <span className="">{subject.name}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SearchBox