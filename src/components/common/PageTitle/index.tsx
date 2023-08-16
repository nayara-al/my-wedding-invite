interface IPageTitle {
    title: string
}
export const PageTitle = ({title}: IPageTitle) => {
    return (
        <div className="font-gwendolyn bg-primary px-4 h-12 flex text-center self-center items-center justify-center">
            <h1 className="text-[32px]">{title}</h1>
        </div>
    )
}