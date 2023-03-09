
//@ts-nocheck
import { QuoteSelection } from 'covered-react-lib'

export default function Home() {
  return (
    <>
  
<QuoteSelection
  assets={[
    {
      address: '5707 Blanca Street',
      type: 'home'
    },
    {
      brandName: 'ford',
      model: 'Bronco Base',
      type: 'auto',
      year: 2021
    }
  ]}
  brand={{
    brandColor: '#44D2A8',
    cobrandingEnabled: false,
    customPhoneNumber: '833-487-3683',
    faviconUrl: 'https://assets.itscovered.com/favicon/favicon.ico',
    name: 'Covered',
    brandPath: '/covered',
    svgLogoUrl: 'https://assets.itscovered.com/covered/logos/covered-logo-color.svg'
  }}
  continueWithoutPolicy={{
    onClick: function noRefCheck(){}
  }}
  onQuotesSelected={function noRefCheck(){}}
  quotes={[
    {
      autoCoverages: [
        {
          code: 'UIM',
          name: 'Underinsured Motorist Limit',
          rate: '50/100'
        },
        {
          code: 'UM',
          name: 'Uninsured Motorist Limit',
          rate: '50/100'
        },
        {
          code: 'PD',
          name: 'Property Damage Limit',
          rate: '$100,000'
        },
        {
          code: 'MEDICAL_PAYMENTS',
          name: 'Medical Payments Limit',
          rate: '$5,000'
        },
        {
          code: null,
          name: 'Underinsured Split Limit (Policy Level Coverage)',
          rate: '50/100'
        },
        {
          code: null,
          name: 'Underinsured Split Limit (Policy Level Coverage)',
          rate: '$5,000'
        },
        {
          code: 'RENTAL_REIMBURSEMENT',
          name: 'Extr Trans Expense',
          rate: '40/1200'
        },
        {
          code: 'BI',
          name: 'Bodily Injury',
          rate: '50/100'
        },
        {
          code: null,
          name: 'Underinsured Split Limit (Policy Level Coverage)',
          rate: '50/100'
        },
        {
          code: 'UMPD',
          name: 'Underinsured Motorist Property Damage Limit',
          rate: '$2,500'
        },
        {
          code: 'COLL',
          name: 'Collision',
          rate: '$500'
        },
        {
          code: 'TL',
          name: 'Towing & Labor',
          rate: '$100'
        },
        {
          code: null,
          name: 'Underinsured Split Limit (Policy Level Coverage)',
          rate: '$2,500'
        },
        {
          code: null,
          name: 'Underinsured Split Limit (Policy Level Coverage)',
          rate: '$100,000'
        },
        {
          code: 'COMP',
          name: 'Comprehensive',
          rate: '$500'
        }
      ],
      autoPremium: '$5,252.00',
      bundlePremium: '$7,283.00',
      carrierLogo: 'https://assets.itscovered.com/carriers/encompass.svg',
      carrierName: 'Encompass',
      coverages: [
        {
          code: 'REPLACEMENT_COST',
          name: 'Replacement Cost Dwelling Limit',
          rate: '$375,100'
        },
        {
          code: 'DWELLING',
          name: 'Replacement Cost Dwelling Limit',
          rate: '$375,100'
        },
        {
          code: 'DEDUCTIBLE',
          name: 'Deductible',
          rate: '$1,000'
        },
        {
          code: 'PERSONAL_PROPERTY',
          name: 'Replacement Cost Contents Limit',
          rate: '$243,815'
        },
        {
          code: 'WIND_DEDUCTIBLE',
          name: 'Wind/Hail Deductible',
          rate: 'Call for details'
        },
        {
          code: 'OTHER_STRUCTURES',
          name: 'Other Structures Limit',
          rate: '$37,510'
        },
        {
          code: 'MEDICAL_PAYMENTS',
          name: 'Medical Payments Limit',
          rate: '$5,000'
        },
        {
          code: 'LOSS_OF_USE',
          name: 'Loss of Use Limit',
          rate: '$75,020'
        },
        {
          code: 'PERSONAL_LIABILITY',
          name: 'Personal Liability Limit',
          rate: '$300,000'
        }
      ],
      coveredIndexScore: 4.3,
      currentPremium: null,
      homePremium: '$2,031.00',
      lob: 'home',
      monthlyPremium: '$169.25',
      onlineBoundLink: null,
      premium: '$2,031.00',
      status: 'Succeeded',
      statusText: 'Total Premium= $1840  Application Number: 000186222448850',
      termLength: '12 Month',
      verified: true
    },
    {
      carrierLogo: 'https://assets.itscovered.com/carriers/nationwide.svg',
      carrierName: 'Nationwide',
      coverages: [
        {
          code: 'DEDUCTIBLE',
          name: 'Deductible',
          rate: '$1,000'
        },
        {
          code: 'REPLACEMENT_COST',
          name: 'Replacement Cost Dwelling Limit',
          rate: '$375,100'
        },
        {
          code: 'DWELLING',
          name: 'Replacement Cost Dwelling Limit',
          rate: '$375,100'
        },
        {
          code: 'OTHER_STRUCTURES',
          name: 'Other Structures Limit',
          rate: '$37,510'
        },
        {
          code: 'WIND_DEDUCTIBLE',
          name: 'Wind/Hail Deductible',
          rate: 'Call for details'
        },
        {
          code: 'PERSONAL_PROPERTY',
          name: 'Replacement Cost Contents Limit',
          rate: '$281,325'
        },
        {
          code: 'MEDICAL_PAYMENTS',
          name: 'Medical Payments Limit',
          rate: '$5,000'
        },
        {
          code: 'PERSONAL_LIABILITY',
          name: 'Personal Liability Limit',
          rate: '$300,000'
        },
        {
          code: 'LOSS_OF_USE',
          name: 'Loss of Use Limit',
          rate: 'INCLUDED'
        }
      ],
      coveredIndexScore: 4.2,
      currentPremium: null,
      lob: 'home',
      monthlyPremium: '$170.00',
      onlineBoundLink: null,
      premium: '$2,040.05',
      status: 'Succeeded',
      statusText: 'Total Premium= $2040.05<br></br>Quote Number: OWOQAGNCIA<BR></BR>',
      termLength: '12 Month',
      verified: true
    },
    {
      carrierLogo: 'https://assets.itscovered.com/carriers/safeco.svg',
      carrierName: 'Safeco',
      coverages: [
        {
          code: 'OTHER_STRUCTURES',
          name: 'Other Structures Limit',
          rate: '$37,510'
        },
        {
          code: 'DEDUCTIBLE',
          name: 'Deductible',
          rate: '$1,000'
        },
        {
          code: 'WIND_DEDUCTIBLE',
          name: 'Wind/Hail Deductible',
          rate: 'Call for details'
        },
        {
          code: 'PERSONAL_LIABILITY',
          name: 'Personal Liability Limit',
          rate: '$300,000'
        },
        {
          code: 'PERSONAL_PROPERTY',
          name: 'Replacement Cost Contents Limit',
          rate: '$243,815'
        },
        {
          code: 'MEDICAL_PAYMENTS',
          name: 'Medical Payments Limit',
          rate: '$5,000'
        },
        {
          code: 'REPLACEMENT_COST',
          name: 'Replacement Cost Dwelling Limit',
          rate: '$375,100'
        },
        {
          code: 'DWELLING',
          name: 'Replacement Cost Dwelling Limit',
          rate: '$375,100'
        },
        {
          code: 'LOSS_OF_USE',
          name: 'Loss of Use Limit',
          rate: '$75,020'
        }
      ],
      coveredIndexScore: 3.6,
      currentPremium: null,
      lob: 'home',
      monthlyPremium: '$227.08',
      onlineBoundLink: null,
      premium: '$2,725.00',
      status: 'Succeeded',
      statusText: 'Annual Premium = $2725.00',
      termLength: '12 Month',
      verified: true
    },
    {
      carrierLogo: 'https://assets.itscovered.com/carriers/travelers.svg',
      carrierName: 'Travelers',
      coverages: [
        {
          code: 'DEDUCTIBLE',
          name: 'Deductible',
          rate: '$1,000'
        },
        {
          code: 'PERSONAL_PROPERTY',
          name: 'Replacement Cost Contents Limit',
          rate: '$243,815'
        },
        {
          code: 'LOSS_OF_USE',
          name: 'Loss of Use Limit',
          rate: 'n/a'
        },
        {
          code: 'OTHER_STRUCTURES',
          name: 'Other Structures Limit',
          rate: '$37,510'
        },
        {
          code: 'DWELLING',
          name: 'Replacement Cost Dwelling Limit',
          rate: '$375,100'
        },
        {
          code: 'WIND_DEDUCTIBLE',
          name: 'Wind/Hail Deductible',
          rate: 'Call for details'
        },
        {
          code: 'REPLACEMENT_COST',
          name: 'Replacement Cost Dwelling Limit',
          rate: '$375,100'
        },
        {
          code: 'MEDICAL_PAYMENTS',
          name: 'Medical Payments Limit',
          rate: '$5,000'
        },
        {
          code: 'PERSONAL_LIABILITY',
          name: 'Personal Liability Limit',
          rate: '$300,000'
        }
      ],
      coveredIndexScore: 4.5,
      currentPremium: null,
      lob: 'home',
      monthlyPremium: '$232.67',
      onlineBoundLink: null,
      premium: '$2,792.00',
      status: 'Succeeded',
      statusText: 'Annual Premium= $2792.00<br>COVERAGE PACKAGE: TRAVELERS PROTECT<br>(CCF# 0001047189126)We are currently not able to provide the quote proposal as the carrier is experiencing technical difficulties at this time.',
      termLength: '12 Month',
      verified: true
    },
    {
      carrierLogo: 'https://assets.itscovered.com/carriers/progressive.svg',
      carrierName: 'Progressive Insurance',
      coverages: [
        {
          code: null,
          name: 'Underinsured Split Limit (Policy Level Coverage)',
          rate: '$100,000'
        },
        {
          code: 'UIM',
          name: 'Underinsured Motorist Limit',
          rate: '50/100'
        },
        {
          code: 'COMP',
          name: 'Comprehensive',
          rate: '$500'
        },
        {
          code: 'RENTAL_REIMBURSEMENT',
          name: 'Extr Trans Expense',
          rate: '40/1200'
        },
        {
          code: null,
          name: 'Underinsured Split Limit (Policy Level Coverage)',
          rate: '$5,000'
        },
        {
          code: 'BI',
          name: 'Bodily Injury',
          rate: '50/100'
        },
        {
          code: null,
          name: 'Underinsured Split Limit (Policy Level Coverage)',
          rate: '50/100'
        },
        {
          code: 'PD',
          name: 'Property Damage Limit',
          rate: '$100,000'
        },
        {
          code: 'UMPD',
          name: 'Underinsured Motorist Property Damage Limit',
          rate: '$2,500'
        },
        {
          code: 'COLL',
          name: 'Collision',
          rate: '$500'
        },
        {
          code: 'MEDICAL_PAYMENTS',
          name: 'Medical Payments Limit',
          rate: '$5,000'
        },
        {
          code: 'TL',
          name: 'Towing & Labor',
          rate: 'SELECTED'
        },
        {
          code: 'UM',
          name: 'Uninsured Motorist Limit',
          rate: '50/100'
        }
      ],
      coveredIndexScore: 4.5,
      currentPremium: null,
      lob: 'auto',
      monthlyPremium: '$287.42',
      onlineBoundLink: null,
      premium: '$1,724.50',
      status: 'Succeeded',
      statusText: '6 Month Premium = $1724.50 (Full payment)<br></br> Down Payment= $331.4 (EFT 16.67% Down) <br></br>(Changes were made to quote) <br></br> SuccessWithChanges <br></br> SuccessWithChanges <br></br>',
      termLength: '6 Month',
      verified: true
    },
    {
      carrierLogo: 'https://assets.itscovered.com/carriers/encompass.svg',
      carrierName: 'Encompass',
      coverages: [
        {
          code: 'UIM',
          name: 'Underinsured Motorist Limit',
          rate: '50/100'
        },
        {
          code: 'UM',
          name: 'Uninsured Motorist Limit',
          rate: '50/100'
        },
        {
          code: 'PD',
          name: 'Property Damage Limit',
          rate: '$100,000'
        },
        {
          code: 'MEDICAL_PAYMENTS',
          name: 'Medical Payments Limit',
          rate: '$5,000'
        },
        {
          code: null,
          name: 'Underinsured Split Limit (Policy Level Coverage)',
          rate: '50/100'
        },
        {
          code: null,
          name: 'Underinsured Split Limit (Policy Level Coverage)',
          rate: '$5,000'
        },
        {
          code: 'RENTAL_REIMBURSEMENT',
          name: 'Extr Trans Expense',
          rate: '40/1200'
        },
        {
          code: 'BI',
          name: 'Bodily Injury',
          rate: '50/100'
        },
        {
          code: null,
          name: 'Underinsured Split Limit (Policy Level Coverage)',
          rate: '50/100'
        },
        {
          code: 'UMPD',
          name: 'Underinsured Motorist Property Damage Limit',
          rate: '$2,500'
        },
        {
          code: 'COLL',
          name: 'Collision',
          rate: '$500'
        },
        {
          code: 'TL',
          name: 'Towing & Labor',
          rate: '$100'
        },
        {
          code: null,
          name: 'Underinsured Split Limit (Policy Level Coverage)',
          rate: '$2,500'
        },
        {
          code: null,
          name: 'Underinsured Split Limit (Policy Level Coverage)',
          rate: '$100,000'
        },
        {
          code: 'COMP',
          name: 'Comprehensive',
          rate: '$500'
        }
      ],
      coveredIndexScore: 4.3,
      currentPremium: null,
      lob: 'auto',
      monthlyPremium: '$437.67',
      onlineBoundLink: null,
      premium: '$5,252.00',
      status: 'Succeeded',
      statusText: '12 Month Premium = $5064  Application Number: 000186222448885',
      termLength: '12 Month',
      verified: true
    }
  ]}
  userName="joe"
/>
    </>
  )
}
