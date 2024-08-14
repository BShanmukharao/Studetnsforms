import './Productedroute.css'

function Productedroute() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='bg-primary d-flex flex-column justify-content-center col-12 col-md-3 col-lg-3 col-xl-3'>
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                </div>
                <div className='bg-secondary d-flex flex-row justify-content-center col-12 col-md-6 col-lg-6 col-xl-6'>
                    <div className='bg-dark'>
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />
                    </div>
                    <div className='bg-danger'>
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />
                    </div>
                </div>
                <div className='bg-success d-flex flex-column justify-content-center col-12 col-md-3 col-lg-3 col-xl-3'>
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                </div>
            </div>
        </div>
    )
}
export default Productedroute