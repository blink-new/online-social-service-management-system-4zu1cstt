import { 
  BarChart3, 
  Download, 
  Filter,
  TrendingUp,
  TrendingDown,
  Users,
  Calendar,
  DollarSign,
  Package
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Progress } from '../components/ui/progress'

const kpiData = [
  {
    title: 'Total Service Hours',
    value: '1,248',
    change: '+15.3%',
    trend: 'up',
    description: 'This month'
  },
  {
    title: 'Client Satisfaction',
    value: '94.2%',
    change: '+2.1%',
    trend: 'up',
    description: 'Average rating'
  },
  {
    title: 'Service Completion Rate',
    value: '87.5%',
    change: '-1.2%',
    trend: 'down',
    description: 'Successfully completed'
  },
  {
    title: 'Revenue Generated',
    value: '$124,560',
    change: '+8.7%',
    trend: 'up',
    description: 'This quarter'
  }
]

const serviceMetrics = [
  {
    service: 'Mental Health Counseling',
    sessions: 234,
    revenue: 35100,
    satisfaction: 96,
    growth: 12
  },
  {
    service: 'Family Support Services',
    sessions: 189,
    revenue: 37800,
    satisfaction: 94,
    growth: 8
  },
  {
    service: 'Career Counseling',
    sessions: 156,
    revenue: 15600,
    satisfaction: 91,
    growth: 15
  },
  {
    service: 'Housing Assistance',
    sessions: 201,
    revenue: 0,
    satisfaction: 89,
    growth: -3
  }
]

const clientDemographics = [
  { category: 'Age 18-25', percentage: 22, count: 128 },
  { category: 'Age 26-35', percentage: 34, count: 198 },
  { category: 'Age 36-50', percentage: 28, count: 163 },
  { category: 'Age 51+', percentage: 16, count: 93 }
]

export default function Reports() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Track performance and generate insights</p>
        </div>
        <div className="flex space-x-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-40">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{kpi.value}</p>
                  <div className="flex items-center mt-1">
                    {kpi.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {kpi.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">{kpi.description}</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-full">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Service Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="mr-2 h-5 w-5" />
              Service Performance
            </CardTitle>
            <CardDescription>
              Monthly metrics by service type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {serviceMetrics.map((service, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{service.service}</h4>
                    <div className="flex items-center space-x-1">
                      {service.growth >= 0 ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                      <span className={`text-sm ${service.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {service.growth > 0 ? '+' : ''}{service.growth}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Sessions</p>
                      <p className="font-medium">{service.sessions}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Revenue</p>
                      <p className="font-medium">${service.revenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Satisfaction</p>
                      <p className="font-medium">{service.satisfaction}%</p>
                    </div>
                  </div>
                  
                  <Progress value={service.satisfaction} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Client Demographics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Client Demographics
            </CardTitle>
            <CardDescription>
              Age distribution of active clients
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clientDemographics.map((demo, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{demo.category}</span>
                    <span className="text-sm text-gray-600">{demo.count} clients</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Progress value={demo.percentage} className="flex-1 h-2" />
                    <span className="text-sm font-medium text-gray-900 min-w-[3rem]">
                      {demo.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Monthly Overview
          </CardTitle>
          <CardDescription>
            Key metrics and trends for the current month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="bg-blue-50 p-3 rounded-full w-fit mx-auto mb-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900">New Clients</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">47</p>
              <p className="text-sm text-green-600">+23% from last month</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="bg-green-50 p-3 rounded-full w-fit mx-auto mb-3">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-medium text-gray-900">Total Appointments</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">342</p>
              <p className="text-sm text-green-600">+12% from last month</p>
            </div>
            
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="bg-purple-50 p-3 rounded-full w-fit mx-auto mb-3">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-medium text-gray-900">Revenue</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">$45,230</p>
              <p className="text-sm text-green-600">+8% from last month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}