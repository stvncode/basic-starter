import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  Separator,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "aeonix"
import { Outlet, useLocation } from "react-router-dom"
import { AppSidebar } from "./sidebar/app-sidebar"

export const Layout = () => {
  const { pathname } = useLocation()

  const page = pathname.split("/").pop()

  const upperCaseFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {page === ""
                      ? "Dashboard"
                      : upperCaseFirstLetter(page ?? "")}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
