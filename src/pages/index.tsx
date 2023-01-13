import { Logo } from "../components/shared/layout/Logo/Logo";
import { Page } from "../components/shared/layout/Page/Page";
import { SearchBar } from "../components/shared/layout/SearchBar/SearchBar";
import { Wrapped } from "../components/shared/layout/Wrapped/Wrapped";

export default function Home() {
  return (
    <Page>
      <Wrapped>
        <Logo width={250} height={64}/>
        <SearchBar />
      </Wrapped>
    </Page>
  )
}
