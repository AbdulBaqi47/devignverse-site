import Link from 'next/link'

const Portfolio = () => {
  const portfolioItems = [
    { name: 'Cartlow', url: 'www.cartlow.com' },
    { name: 'Cartlow Android App', url: 'https://play.google.com/store/apps/details?id=com.cartlow.android&hl=en&gl=US' },
    { name: 'Tellotalk', url: 'www.tellotalk.com' },
    { name: 'MentorDY', url: 'www.mentordy.com' },
    { name: 'Major Dripathletics', url: 'www.majordripathletics.com' },
    { name: 'Super Asia Group Apps', url: 'https://play.google.com/store/apps/dev?id=7234017972830944161' },
    { name: 'Super Asia Group', url: 'www.superasiagroup.com' },
    { name: 'Khurram Shahzad UI/UX Behance', url: 'https://www.behance.net/khurramshahzaduiux' },
  ]

  return (
    <section id='portfolio' className='py-16 bg-gray-50'>
      <div className='container'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-midnight_text mb-4'>Our Portfolio</h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Explore our diverse range of projects and collaborations. From innovative apps to stunning designs, see the work that defines our universe.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {portfolioItems.map((item, index) => (
            <Link
              key={index}
              href={`https://${item.url}`}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 block'
            >
              <h3 className='text-xl font-semibold text-midnight_text mb-2'>{item.name}</h3>
              <p className='text-primary hover:text-primary-dark transition-colors duration-300'>
                {item.url}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
