const { fuzzyLogicMatch } = require('../utilities/attendance_status');
const { get_user_id_from_header } = require('../utilities/manage_user_id');

// get, /api/attendance
async function getAttendanceData(req, res) {
  try {
    const user_id = await get_user_id_from_header(req);

    console.log('\n*******************');
    console.log('get attendance post = ', req.body);
    const { matchThreshold, minutesThreshold } = req.body;
    console.log('*******************\n');

    const result = await fuzzyLogicMatch(user_id, matchThreshold, minutesThreshold);

    res.json({ result });

  } catch (error) {
    console.error('Error executing function:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAttendanceData,
}
