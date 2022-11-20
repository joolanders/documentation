import { Header } from '@/components/Header'
import { DocHero } from '@/components/DocHero'
import { DocContent } from '@/components/DocContent'
import { useRouter } from 'next/router'

export function DocLayout({ children, navigation, subnav = {}, markdoc = {} }) {
  const router = useRouter()
  const {frontmatter = {}, content = []} = markdoc

  const tabs = Object.keys(subnav).map(path => ({
    name: subnav[path]?.title,
    href: path,
    current: router.pathname.startsWith(path)
  }))

  return (
    <>
      <Header navigation={navigation} tabs={tabs}/>
      {frontmatter.hero && <DocHero {...frontmatter.hero}/>}
      <DocContent navigation={navigation} frontmatter={frontmatter} content={content}>
        {children}
      </DocContent>
    </>
  )
}

