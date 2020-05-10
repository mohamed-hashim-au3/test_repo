import { Spin, Icon } from 'antd'

export default function Loader({isLoading}) {
    return (
        <div className="c-loader text-center">
            {
                isLoading && <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />
            }
        </div>
    )
}
