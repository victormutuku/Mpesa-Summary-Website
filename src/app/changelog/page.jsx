import HeaderLinks from '../components/HeaderLinks'
import { notes } from '../services/FirebaseConnection'

export default function ChangeLog() {

    var notesMap = notes();

    return (
        <div className="h-screen flex flex-col items-center pt-20 px-5 not-dark:bg-magnolia-50 dark:bg-magnolia-950 not-dark:text-magnolia-950 dark:text-magnolia-50">
            <HeaderLinks active='changelog' />
            <p className='text-2xl font-medium lg:px-20 mb-8'>ChangeLog</p>
            <div className="lg:px-20">
                {notesMap.map((item) => {
                    return item.value.length !== 0 ?
                        <>
                            <p key={item.key} className="text-xl font-semibold mb-4">{item.key}</p>
                            <ul className='mb-5'>
                                {item.value.map((value, index) => <li key={index} className='list-disc list-inside'>{value}</li>)}
                            </ul>
                        </> : <></>
                })}
            </div>
        </div>
    )
}
