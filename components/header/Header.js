import Nav from '../nav/Nav'
import Link from 'next/link'
import { PROJECT_NAME } from '../../constants/projectKeys'

const Header = ({mainMenus}) => {
    return (
		<div className="c-header">
			<div className="container">
				<div className="row">
					<div className="col-12 d-flex justify-content-between align-items-center">
						<strong className="c-logo ">
							<Link href="/" >
								<a>
									<img src="/images/logo.png" alt={PROJECT_NAME} />
								</a>
							</Link>
						</strong>
						<div className="c-header__right-area">
							<Nav items={mainMenus} />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

Header.defaultProps = {
    mainMenus: []
}

export default Header