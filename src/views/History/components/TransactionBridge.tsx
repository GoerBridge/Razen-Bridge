import styled from 'styled-components'
import Link from 'next/link'
import { Text, Grid } from '@pancakeswap/uikit'
import TableBase from 'components/Table/TableBase'
import { formatAmount, formatDate, formatCode } from 'helpers'
import dayjs from 'dayjs'

const TransactionBridgeStyle = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    > * {
      @media only screen and (max-width: 370px) {
        font-size: 14px;
      }
    }
  }

  .table-custom {
    .status {
      width: fit-content;
      min-width: 105px;
      height: 30px;

      line-height: 30px;
      text-align: center;
      color: #fff;

      // box-shadow: -2px -2px 2px #1e3238, inset 0px -2px 1px #001015;
      border-radius: 8px;

      &.success {
        background: #008037;
      }
      &.processing {
        background: #f98c36;
      }
      &.pending {
        background: #d2d2db;
      }
      &.error {
        background: #ae0c0c;
      }
    }
    .data-from {
      max-width: 160px;
    }
    .data-created {
      max-width: 90px;
      line-height: 2;
    }

    .custom-text {
      font-size: 14px;

      ${({ theme }) => theme.mediaQueries.lg} {
        font-size: 16px;
      }
    }

    a.custom-text {
      &:hover {
        color: #008037;
      }
    }
  }
  .kkcgfB {
  }
  .ant-table .ant-table-thead .ant-table-cell,
  .ant-table .ant-table-tbody .ant-table-cell {
    // color: #343131;
    font-weight: 500;
    font-size: 14px;
    background: #ffffff99;
  }
  .ant-table-wrapper .ant-table:not(.ant-table-bordered) .ant-table-tbody > tr.ant-table-row:hover > td:first-child,
  .ant-table-wrapper
    .ant-table:not(.ant-table-bordered)
    .ant-table-tbody
    > tr
    > td.ant-table-cell-row-hover:first-child,
  .ant-table-wrapper
    .ant-table:not(.ant-table-bordered)
    .ant-table-tbody
    > tr.ant-table-row.ant-table-row-selected
    > td:first-child {
    border-start-start-radius: 0px;
    border-end-start-radius: 0px;
  }
  .ant-table-wrapper .ant-table:not(.ant-table-bordered) .ant-table-tbody > tr.ant-table-row:hover > td:last-child,
  .ant-table-wrapper .ant-table:not(.ant-table-bordered) .ant-table-tbody > tr > td.ant-table-cell-row-hover:last-child,
  .ant-table-wrapper
    .ant-table:not(.ant-table-bordered)
    .ant-table-tbody
    > tr.ant-table-row.ant-table-row-selected
    > td:last-child {
    border-start-end-radius: 0px;
    border-end-end-radius: 0px;
  }
  .ImCmd {
    font-weight: 300;
  }
`
const TransactionBridge = ({ transactionList, chainList }) => {
  const columns = [
    {
      title: 'No',
      dataIndex: 'id',
      key: 'id',
      width: '60px',
      render: (_, __, index) => <Text fontSize={[14, , 16]}>{index + 1}</Text>,
    },
    {
      title: 'Send',
      dataIndex: 'fromAmount',
      render: (data, record) => {
        return (
          <Text fontSize={[14, , 16]}>
            {formatAmount(data, { tokenPrecision: true, decimals: 18 })} {record?.currency_code}
          </Text>
        )
      },
    },
    {
      title: 'Received',
      dataIndex: 'toAmount',
      render: (data, record) => {
        return (
          <Text fontSize={[14, , 16]}>
            {formatAmount(data, { tokenPrecision: true, decimals: 18 })} {record?.currency_code}
          </Text>
        )
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (data) => {
        const status = () => {
          let statusData = 'pending'
          switch (data) {
            case 'CREATED':
              statusData = 'pending'
              break
            case 'pending':
              statusData = 'pending'
              break
            case 'FAIL':
              statusData = 'error'
              break
            default:
              statusData = 'success'
              break
          }
          return statusData
        }
        return <div className={`status ${status()}`}>{data}</div>
      },
    },
    {
      title: 'From',
      dataIndex: 'from',
      render: (_, record) => {
        const currentChain = chainList.find((item) => item?.code === record?.fromChain)
        return (
          <div className="data-from">
            <Grid gridTemplateColumns="repeat(2, 1fr)" gridColumnGap="12px">
              <Text className="custom-text">Address:</Text>
              <Link href={`${currentChain?.scan}/address/${record.fromAddress}`} passHref>
                <Text as="a" className="custom-text" textAlign="right" target="_blank" rel="noopener noreferrer">
                  {record.fromAddress ? formatCode(record.fromAddress, 6, 0) : '--'}
                </Text>
              </Link>
            </Grid>
            <Grid gridTemplateColumns="repeat(2, 1fr)" gridColumnGap="12px" mt={['8px', , '16px']}>
              <Text className="custom-text">Txh:</Text>
              <Link href={`${currentChain?.scan}/tx/${record.fromHash}`} passHref>
                <Text as="a" className="custom-text" textAlign="right" target="_blank" rel="noopener noreferrer">
                  {record.fromHash ? formatCode(record.fromHash, 6, 0) : '--'}
                </Text>
              </Link>
            </Grid>
            <Grid gridTemplateColumns="repeat(2, 1fr)" gridColumnGap="12px" mt={['8px', , '16px']}>
              <Text className="custom-text">Network:</Text>
              <Text className="custom-text" textAlign="right">
                {record.fromChain ? formatCode(record.fromChain, 15, 0) : '--'}
              </Text>
            </Grid>
          </div>
        )
      },
    },
    {
      title: 'To',
      dataIndex: 'to',
      render: (_, record) => {
        const currentChain = chainList.find((item) => item?.code === record?.toChain)

        return (
          <div className="data-from">
            <Grid gridTemplateColumns="repeat(2, 1fr)" gridColumnGap="12px">
              <Text className="custom-text">Address:</Text>
              <Link href={`${currentChain?.scan}/address/${record.toAddress}`} passHref>
                <Text as="a" className="custom-text" textAlign="right" target="_blank" rel="noopener noreferrer">
                  {record.toAddress ? formatCode(record.toAddress, 6, 0) : '--'}
                </Text>
              </Link>
            </Grid>
            <Grid gridTemplateColumns="repeat(2, 1fr)" gridColumnGap="12px" mt={['8px', , '16px']}>
              <Text className="custom-text">Txh:</Text>
              {record.toHash ? (
                <Link href={`${currentChain?.scan}/tx/${record.toHash}`} passHref>
                  <Text as="a" className="custom-text" textAlign="right" target="_blank" rel="noopener noreferrer">
                    {formatCode(record.toHash, 6, 0)}
                  </Text>
                </Link>
              ) : (
                <Text className="custom-text" textAlign="right">
                  --
                </Text>
              )}
            </Grid>
            <Grid gridTemplateColumns="repeat(2, 1fr)" gridColumnGap="12px" mt={['8px', , '16px']}>
              <Text className="custom-text">Network:</Text>
              <Text className="custom-text" textAlign="right">
                {record.toChain ? formatCode(record.toChain, 15, 0) : '--'}
              </Text>
            </Grid>
          </div>
        )
      },
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      render: (text, record) => (
        <div className="data-created">{dayjs(record.createdAt * 1000).format('YYYY/MM/DD  hh:mm:ss')}</div>
      ),
    },
    {
      title: 'Updated',
      dataIndex: 'updatedAt',
      render: (text, record) => (
        <div className="data-created">{dayjs(record.updatedAt * 1000).format('YYYY/MM/DD  hh:mm:ss')}</div>
      ),
    },
  ]
  return (
    <TransactionBridgeStyle>
      <div className="head">
        <Text fontSize={[16, , 20]} fontWeight="700" color="#35A9E0">
          Recent transactions
        </Text>
        {/* <Link href="/transactions" passHref>
          <Text as="a" fontSize={[16, , 20]} color="#35A9E0">
            View all transactions
          </Text>
        </Link> */}
      </div>
      <TableBase
        className="table-custom"
        scroll={{ x: 800 }}
        columns={columns}
        dataSource={transactionList}
        pagination={false}
        rowKey={(record) => record._id}
      />
    </TransactionBridgeStyle>
  )
}

export default TransactionBridge
