import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'
import { Waveform } from '@/components/Waveform'
import profileImage from '@/images/adsprofile.jpeg'
import { FileUser, Linkedin, Github } from 'lucide-react'

function PersonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 11 12" {...props}>
      <path d="M5.019 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm3.29 7c1.175 0 2.12-1.046 1.567-2.083A5.5 5.5 0 0 0 5.019 7 5.5 5.5 0 0 0 .162 9.917C-.39 10.954.554 12 1.73 12h6.578Z" />
    </svg>
  )
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let hosts = ['Fernando Unzueta']

  const downloadCV = () => {
    fetch('FernandoUnzuetaCV2023.docx.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'FernandoUnzuetaCV2023.pdf'
        alink.click()
      })
    })
  }

  return (
    <>
      <header className="lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
        <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
          <span className="text-muted-foreground font-mono">
            Software developer
          </span>
          <span className="mt-6 flex gap-6 font-bold">
            {hosts.map((host, hostIndex) => (
              <Fragment key={host}>
                {hostIndex !== 0 && (
                  <span aria-hidden="true" className="text-slate-400">
                    /
                  </span>
                )}
                {host}
              </Fragment>
            ))}
          </span>
        </div>
        <div className="lg:border-muted relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:px-8 lg:py-12 xl:px-12">
          <Link
            href="/"
            className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
            aria-label="Homepage"
          >
            <Image
              className="w-full"
              src={profileImage}
              alt=""
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
              priority
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" />
          </Link>
          <div className="mt-10 text-center lg:mt-12 lg:text-left">
            <p className="text-xl font-bold">Fernando Unzueta</p>
            <p className="mt-3 text-lg font-medium leading-8">
              I'm a full stack web developer using Java, JS and TS technologies.
              Let's grow up together and become someone who can help others!
            </p>
          </div>
          {/* <AboutSection className="mt-12 hidden lg:block" /> */}
          <section className="mt-10 lg:mt-12">
            <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
              <TinyWaveFormIcon
                colors={['fill-indigo-300', 'fill-blue-300']}
                className="h-2.5 w-2.5"
              />
              <span className="text-muted-foreground ml-2.5">Resources</span>
            </h2>
            <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
            <ul
              role="list"
              className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
            >
              <li className="flex">
                <Link
                  href="/"
                  className="text-muted-foreground group flex items-center"
                  aria-label="cv"
                >
                  <FileUser size={24} />
                  <span className="text-muted-foreground hidden sm:ml-3 sm:block">
                    CV
                  </span>
                </Link>
              </li>

              <li className="flex">
                <Link
                  href="https://github.com/Unzferk"
                  className="text-muted-foreground group flex items-center"
                  aria-label="github"
                >
                  <Github size={24} />
                  <span className="text-muted-foreground hidden sm:ml-3 sm:block">
                    Github
                  </span>
                </Link>
              </li>

              <li className="flex">
                <Link
                  href="https://linkedin.com/in/rudy-fernando-unzueta-perez-a2640822b"
                  className="text-muted-foreground group flex items-center"
                  aria-label="linkedin"
                >
                  <Linkedin size={24} />
                  <span className="text-muted-foreground hidden sm:ml-3 sm:block">
                    LinkedIn
                  </span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </header>
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <Waveform className="absolute left-0 top-0 h-20 w-full" />
        <div className="relative">{children}</div>
      </main>
      <footer className="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
          {/* <AboutSection /> */}
          <h2 className="mt-8 flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
            <PersonIcon className="h-3 w-auto fill-slate-300" />
            <span className="ml-2.5">Software Developer</span>
          </h2>
          <div className="mt-2 flex gap-6 text-sm font-bold leading-7 text-slate-900">
            {hosts.map((host, hostIndex) => (
              <Fragment key={host}>
                {hostIndex !== 0 && (
                  <span aria-hidden="true" className="text-slate-400">
                    /
                  </span>
                )}
                {host}
              </Fragment>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
