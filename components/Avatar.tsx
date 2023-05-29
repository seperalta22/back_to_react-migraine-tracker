// @ts-nocheck
'use client';
import * as React from 'react';
import { Avatar } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthContext } from '@/app/context';

export const AvatarComponent = () => {
	const router = useRouter();

	return (
		<Avatar className='pointer' onClick={() => router.push('/')}>
			A
		</Avatar>
	);
};
