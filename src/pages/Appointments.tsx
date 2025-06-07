import { useState } from 'react'
import { 
  Plus, 
  Calendar, 
  Clock, 
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'

const appointments = [
  {
    id: 1,
    client: 'Sarah Johnson',
    service: 'Mental Health Counseling',
    provider: 'Dr. Sarah Smith',
    date: '2024-01-17',
    time: '10:00 AM',
    duration: 60,
    status: 'confirmed',
    type: 'in-person'
  },
  {
    id: 2,
    client: 'Michael Chen',
    service: 'Family Support Services',
    provider: 'Maria Garcia',
    date: '2024-01-17',
    time: '2:30 PM',
    duration: 90,
    status: 'pending',
    type: 'virtual'
  },
  {
    id: 3,
    client: 'Emily Davis',
    service: 'Career Counseling',
    provider: 'John Williams',
    date: '2024-01-17',
    time: '4:00 PM',
    duration: 45,
    status: 'confirmed',
    type: 'in-person'
  },
  {
    id: 4,
    client: 'Robert Wilson',
    service: 'Mental Health Counseling',
    provider: 'Dr. Sarah Smith',
    date: '2024-01-18',
    time: '9:00 AM',
    duration: 60,
    status: 'confirmed',
    type: 'virtual'
  },
  {
    id: 5,
    client: 'Lisa Anderson',
    service: 'Housing Assistance',
    provider: 'Robert Brown',
    date: '2024-01-18',
    time: '11:30 AM',
    duration: 120,
    status: 'cancelled',
    type: 'in-person'
  }
]

export default function Appointments() {
  const [currentDate] = useState(new Date())
  const [viewType, setViewType] = useState('day')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredAppointments = appointments.filter(appointment => {
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter
    return matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeColor = (type: string) => {
    return type === 'virtual' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600">Schedule and manage client appointments</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Schedule Appointment
        </Button>
      </div>

      {/* Calendar Controls */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-lg font-semibold">
                {currentDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h2>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <Select value={viewType} onValueChange={setViewType}>
                <SelectTrigger className="w-32">
                  <Calendar className="mr-2 h-4 w-4" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Day</SelectItem>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>
                {filteredAppointments.filter(apt => apt.date === '2024-01-17').length} appointments scheduled
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredAppointments
                  .filter(apt => apt.date === '2024-01-17')
                  .map((appointment) => (
                    <div key={appointment.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4 text-gray-400" />
                              <span className="font-medium">{appointment.time}</span>
                            </div>
                            <Badge className={getStatusColor(appointment.status)}>
                              {appointment.status}
                            </Badge>
                            <Badge className={getTypeColor(appointment.type)}>
                              {appointment.type}
                            </Badge>
                          </div>
                          
                          <h4 className="font-medium text-gray-900 mb-1">
                            {appointment.client}
                          </h4>
                          <p className="text-sm text-gray-600 mb-1">
                            {appointment.service}
                          </p>
                          <p className="text-sm text-gray-500">
                            with {appointment.provider} • {appointment.duration} minutes
                          </p>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button size="sm">
                            {appointment.status === 'pending' ? 'Confirm' : 'View'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Appointments */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming</CardTitle>
              <CardDescription>
                Next appointments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {filteredAppointments
                  .filter(apt => apt.date === '2024-01-18')
                  .map((appointment) => (
                    <div key={appointment.id} className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{appointment.time}</span>
                        <Badge className={getStatusColor(appointment.status)} size="sm">
                          {appointment.status}
                        </Badge>
                      </div>
                      <h5 className="font-medium text-gray-900 text-sm mb-1">
                        {appointment.client}
                      </h5>
                      <p className="text-xs text-gray-600">
                        {appointment.service}
                      </p>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Today's Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Appointments</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Confirmed</span>
                  <span className="font-medium text-green-600">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Pending</span>
                  <span className="font-medium text-yellow-600">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Virtual Sessions</span>
                  <span className="font-medium text-purple-600">1</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}