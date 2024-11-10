# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class ApiTemporalanalysisBody(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, temporal_data: Object=None):  # noqa: E501
        """ApiTemporalanalysisBody - a model defined in Swagger

        :param temporal_data: The temporal_data of this ApiTemporalanalysisBody.  # noqa: E501
        :type temporal_data: Object
        """
        self.swagger_types = {
            'temporal_data': Object
        }

        self.attribute_map = {
            'temporal_data': 'temporal_data'
        }
        self._temporal_data = temporal_data

    @classmethod
    def from_dict(cls, dikt) -> 'ApiTemporalanalysisBody':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The api_temporalanalysis_body of this ApiTemporalanalysisBody.  # noqa: E501
        :rtype: ApiTemporalanalysisBody
        """
        return util.deserialize_model(dikt, cls)

    @property
    def temporal_data(self) -> Object:
        """Gets the temporal_data of this ApiTemporalanalysisBody.

        Data for temporal analysis  # noqa: E501

        :return: The temporal_data of this ApiTemporalanalysisBody.
        :rtype: Object
        """
        return self._temporal_data

    @temporal_data.setter
    def temporal_data(self, temporal_data: Object):
        """Sets the temporal_data of this ApiTemporalanalysisBody.

        Data for temporal analysis  # noqa: E501

        :param temporal_data: The temporal_data of this ApiTemporalanalysisBody.
        :type temporal_data: Object
        """

        self._temporal_data = temporal_data
