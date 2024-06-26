import Link from 'next/link'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BankTabItem } from './BankTabItem'
import BankInfo from './BankInfo'
import TransactionsTable from './TransactionsTable'

const RecentTransactions = ({
    accounts,
    transactions = [],
    appwriteItemId,
    page = 1
}: RecentTransactionsProps) => {
    const indexOfLastTransaction = page * 10
    const indexOfFirstTransaction = indexOfLastTransaction - 10
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction)
    return (
        <section className='recent-transactions'>
            <header className='flex items-center justify-between'>
                <h2 className='recent-transactions-label'>
                    Recent Transactions
                </h2>
                <Link href={`/transaction-history/?id=${appwriteItemId}`} className='view-all-btn'>
                    View All
                </Link>
            </header>
            <Tabs defaultValue={appwriteItemId} className="w-full">
                <TabsList className='recent-transactions-tablist'>
                    {accounts.map((account: Account) => (
                        <TabsTrigger key={account.id} value={account.appwriteItemId}>
                            <BankTabItem account={account} key={account.id} appwriteItemId={appwriteItemId}/>
                        </TabsTrigger>
                    ))}
                </TabsList>
                {accounts.map((account: Account) => (
                    <TabsContent key={account.id} value={account.appwriteItemId} className='space-y-4'>
                        <BankInfo account={account} type='full' appwriteItemId={appwriteItemId}/>
                        <TransactionsTable transactions={currentTransactions}/>
                    </TabsContent>
                ))}
            </Tabs>

        </section>
    )
}

export default RecentTransactions