import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/includes';

export default function DetailReservasi() {
  const router = useRouter();
  const { uid } = router.query;

  return <Layout pageTitle="Detail Reservasi">Detail Rservasei {uid}</Layout>;
}
