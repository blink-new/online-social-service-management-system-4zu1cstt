import { 
  Users, 
  Calendar, 
  Package, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  DollarSign
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Progress } from '../components/ui/progress'

const stats = [
  {
    title: 'Total Clients',
    value: '2,847',
    change: '+12.5%',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Active Services',
    value: '156',
    change: '+3.2%',
    icon: Package,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    title: 'Today\'s Appointments',
    value: '47',
    change: '-2.1%',
    icon: Calendar,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    title: 'Monthly Revenue',
    value: '$45,230',
    change: '+8.7%',
    icon: DollarSign,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }
]

const recentAppointments = [
  {
    id: 1,
    client: 'Sarah Johnson',
    service: 'Mental Health Counseling',
    time: '10:00 AM',
    status: 'confirmed',
    provider: 'Dr. Smith'
  },
  {
    id: 2,
    client: 'Michael Chen',
    service: 'Family Support Services',
    time: '2:30 PM',
    status: 'pending',
    provider: 'Maria Garcia'
  },
  {
    id: 3,
    client: 'Emily Davis',
    service: 'Career Counseling',
    time: '4:00 PM',
    status: 'confirmed',
    provider: 'John Williams'
  }
]

const serviceUtilization = [
  { name: 'Mental Health Counseling', utilization: 87, total: 120 },
  { name: 'Family Support Services', utilization: 65, total: 90 },
  { name: 'Career Counseling', utilization: 43, total: 60 },
  { name: 'Housing Assistance', utilization: 34, total: 50 }
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
        </div>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Schedule Appointment
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-full`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Today's Appointments
            </CardTitle>
            <CardDescription>
              {recentAppointments.length} appointments scheduled for today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{appointment.client}</h4>
                    <p className="text-sm text-gray-600">{appointment.service}</p>
                    <p className="text-sm text-gray-500">with {appointment.provider}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{appointment.time}</p>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      appointment.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {appointment.status === 'confirmed' ? (
                        <CheckCircle className="mr-1 h-3 w-3" />
                      ) : (
                        <AlertTriangle className="mr-1 h-3 w-3" />
                      )}
                      {appointment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Appointments
            </Button>
          </CardContent>
        </Card>

        {/* Service Utilization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Service Utilization
            </CardTitle>
            <CardDescription>
              Current capacity usage across services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {serviceUtilization.map((service) => (
                <div key={service.name}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-900">{service.name}</h4>
                    <span className="text-sm text-gray-600">
                      {service.utilization}/{service.total}
                    </span>
                  </div>
                  <Progress 
                    value={(service.utilization / service.total) * 100} 
                    className="h-2"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {Math.round((service.utilization / service.total) * 100)}% capacity
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks and shortcuts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
              <Users className="h-8 w-8" />
              <span>Add New Client</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
              <Package className="h-8 w-8" />
              <span>Create Service</span>
            </Button>
            <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
              <Calendar className="h-8 w-8" />
              <span>Schedule Meeting</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}