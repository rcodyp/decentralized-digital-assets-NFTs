import { createNft, fetchDigitalAssest, mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata' 
import {
     airdropesIfRequired,
     getExplorerLink,
     getKeypairFromFile,
} from "@solana-developers/helpers";

import {createumi} from "@metaplex-foundation/umi-bundle-defaults"

import { clusterApiUrl, Connection, Connection , LAMPORT_PER_SOL } from "@solana/web3.js"

const connection = new Connection(clusterApiUrl("devnet"))

const user = await getKeypairFromFile();

await airdropesIfRequired(connection, user.publicKey, 1 * LAMPORT_PER_SOL, 0.5* LAMPORT_PER_SOL+);

