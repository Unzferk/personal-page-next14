'use client'

import { Link, usePathname } from '@/i18n/routing'
import { useRouter } from 'next/navigation'

const tabs = [
  { name: 'Projects', href: '/home/projects' },
  { name: 'Certifications', href: '/home/certifications' },
  { name: 'Others', href: '/home/others' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const path = tabs.find((tab) =>
      tab.href.includes(e.target.value.toLowerCase()),
    )
    router.push(path?.href || '#')
  }

  return (
    <div className="mx-4 w-full justify-between">
      <div className="flex w-full flex-wrap justify-between sm:hidden">
        <select
          onChange={handleOnChange}
          defaultValue={
            tabs.find((tab) => pathname.includes(tab.href))?.href ?? ''
          }
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:text-primary focus:outline-2 focus:-outline-offset-2"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                aria-current={pathname.includes(tab.href) ? 'page' : undefined}
                className={classNames(
                  pathname.includes(tab.href)
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'w-1/4 border-b-2 px-1 py-4 text-center text-sm font-medium',
                )}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
