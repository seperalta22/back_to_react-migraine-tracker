// @ts-nocheck
'use client';

import { FormControlLabel, Grid, Switch } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from './Logo';
import { AvatarComponent } from './Avatar';

export const Header = ({ toggleDark }: { toggleDark: () => void }) => {
	const pathname = usePathname();
	const router = useRouter();
	return (
		<Grid sx={{ p: 2 }}>
			<Grid
				container
				direction='row'
				justifyContent={pathname === '/' ? 'center' : 'space-between'}
				alignItems='center'
			>
				<Grid item lg={6}>
					<Logo />
				</Grid>
				<Grid
					item
					xs={6}
					rowSpacing={1}
					container
					direction='row'
					justifyContent='flex-end'
					alignItems='center'
				>
					<Grid
						container
						direction='row'
						justifyContent='flex-end'
						alignItems='center'
					>
						<FormControlLabel
							control={
								<Switch onChange={toggleDark} name='gilad' color='primary' />
							}
							label='Dark Mode'
						/>
						<AvatarComponent />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
